If you've worked with PostgreSQL in the past using the [psql](http://www.postgresql.org/docs/current/static/app-psql.html) client you might have noticed that, although powerful, it's not a tool geared for writing (or reading) complex multi-line queries, or following a 'write-execute-refine' workflow; that is, where you write some code, execute it, refine the code based on the results, etc. So, let's say I write some SQL code in vim, and I want to run some of it to see if it works. I would have to copy the block of code I want to run to a new buffer, save the file, switch to psql, type "\i filepath", and wait for the results (... and now you have a new file to maintain temporarily). This is definitely something we can reduce to one or two keystrokes from within vim (God forbid we have to move our fingers away from the 'hjkl' position).

> ## Wouldn't it be nice to be able to write, execute, and view the results from within vim?

[dbext](https://github.com/vim-scripts/dbext.vim) is a vim plugin that aims to do exactly that (credit to the author Peter Bagyinszki)! Don't be put-off by the poorly presented [Github](https://github.com/vim-scripts/dbext.vim) or [Vim scripts](http://www.vim.org/scripts/script.php?script_id=356) page - the plugin comes with a helpful tutorial (described below) that covers what you need to know. Here, I will show you what I had to do to get started using dbext.

## What you need

You need to have vim 7+, and the psql client installed locally. You'll also need access to a PostgreSQL server.

## Download and configure dbext

I use the [Pathogen](https://github.com/tpope/vim-pathogen) vim plugin to easily install other plugins and run-time files. If you do too, then just navigate to the `~/.vim/bundle/` folder in your home directory and clone the dbext Github repository.

```bash
$ cd ~/.vim/bundle/
$ git clone https://github.com/vim-scripts/dbext.vim
$ ls
dbext.vim/
```

That's it - installed!

dbext works by relating every vim buffer to a database connection profile that we define in our .vimrc. A connection profile describes a set of parameters needed to connect to a database, such as username, host, port, database name etc. We can define various profiles, and also define a default profile to use whenever a new buffer is opened in vim. Open your .vimrc file and enter the following two lines, making sure you substitute your values for host, port, dbname, and user (for PostgreSQL, leave the type as 'PGSQL'). In the example below, we are connecting to a database called 'jms', as user 'jms', on a server running on the same machine 'localhost' via port 5433.

```vim
" Each profile has the form:
" g:dbext_default_profile_'profilename' = 'var=value:var=value:...'
let g:dbext_default_profile_psql = 'type=PGSQL:host=localhost:port=5433:dbname=jms:user=jms'
let g:dbext_default_profile = 'psql'
```

Notice that we're not entering our password - this is because the psql client either asks us for a password when we connect (or everytime we execute a query with dbext), or looks for a .pgpass file in our home directory. I recommend having a .pgpass file. This file typically has a single line of the form: `hostname:port:database:username:password`

## Running queries

Now that we have dbext installed, let's see what we can do with it! I do recommend taking some time to read over the tutorial that comes with dbext by typing the following in vim:

```vim
:h dbext-tutorial
```

So, fire-up vim and select some data from a table in your database.

```sql
select * from staging.customer;
```

We can run this either in normal mode or visual mode. In normal mode, simply move the cursor somewhere within the query (within, and including, the 's' or ';') and type the following, replacing \ with your leader character.

```vim
\se
```

This will bring up the results buffer - a read-only split window displaying the results for the executed statement(s); To focus on this press Ctrl + w twice in quick succession. You can now navigate the results buffer. To close the results buffer, first switch to it, and then press q. If the results window is too small, you can even-out the split window by pressing Ctrl + w once, followed by =. Alternatively, you can type :res +5 or :res -5 to make the split window bigger or smaller by 5 rows.

![](/img/improve-postgresql-workflow-vim-dbext-1.png)

If we had multiple queries and only wanted to run one, or a couple of them, we could enter visual mode to select them (Shift + v followed by j or k to select rows down or up) and again type \se, as before.

![](/img/improve-postgresql-workflow-vim-dbext-2.png)

Isn't that exciting?!! That's just a taster - I've added a small reference of dbext commands at the end of the post. Before that, there's a cool feature you'll love... auto-completion.

## Auto-completion

When working with a large number of tables/views, it can be hard to remember all their names. dbext can help-out with a pop-up menu of potential matches. This functionality does require the following to be done:

- You must be working from a saved file ending in .sql
- Populate the vim dictionary using either of the following commands DBCompleteTables, DBCompleteViews, or DBCompleteProcedures

To avoid having to type a DBComplete* command whenever I start a new buffer, I added this to my .vimrc (this runs the given command once all plugins have been loaded):

```vim
autocmd VimEnter * DBCompleteTables
```

Once that's done and dusted, start typing a SELECT statement. After the FROM keyword, press Ctrl + x followed by Ctrl + o, this will bring up a menu showing all matching tables. If we had started typing the name of the table, and then brought-up the menu, it would filter for those tables matching what we've typed so far. Scroll up and down the menu with Ctrl + n and Ctrl + p.

![](/img/improve-postgresql-workflow-vim-dbext-3.png)

## Quick Reference

### Code Execution

```vim
" Execute code in normal or visual mode. (s)ql (e)xecute
\se

" Execute just the current line. (s)ql (e)xecute (l)ine
\sel
```

### Select from Tables

```vim
" Select from table (s)ql (t)able
" Place cursor over table name, or visual mode select schema & table name
\st

" Select from table, prompt for number of rows to return  (s)ql (T)able
" Place cursor over table name, or visual mode select schema & table name
\sT

" Select from table, prompt for WHERE clause  (s)ql (t)able (w)here
" Place cursor over table name, or visual mode select schema & table name
\stw
```

### Describe Objects

```vim
" Describe table (s)ql (d)escribe (t)able
" Place cursor over table name, or visual mode select schema & table name
\sdt

" Describe procedure (s)ql (d)escribe (p)rocedure
" Place cursor over procedure name, or visual mode select schema & procedure name
\sdp

" Describe procedure (s)ql (d)escribe (v)iew
" Place cursor over view name, or visual mode select schema & view name
\sdv
```

### Listing Objects

```vim
" List tables in database (s)ql (l)ist (t)able
" Prompts for string to match tables by name
\slt

" Same but for procedures
\slp

" Same but for views
\slv

" Get list of table columns in paste buffer (s)ql (l)ist (c)olumns
" Place cursor over table name. Recognises schemas without visual mode selection
" Prompts for alias prefix to be added
\slc
```

### Results Buffer (run inside results buffer)

```vim
" Re-run query that generated current results buffer
R

" Close results buffer
q
```

### Command History

```vim
" List recently executed statements 
" Press RETURN key on selected statement to re-execute
\sh
```