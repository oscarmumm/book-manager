### Book Manager

Book Manager is a prototype of a web that helps to manage a library.
There's two type of users, user and admin. Admin can manage loans, books and users data.

Data structure:

# Users
- user_id
- name
- surname
- email
- phone
- username
- password
- role (admin | user)

# Books
- book_id
- title
- author
- category
- total_copies
- available_copies

# Loans
- id
- user_id
- book_id
- loan_date
- return_date
- returned (boolean)


## Color Themes

# Light

// main background
bg-gray-50

// cards | sections
bg-white shadow rounded

// primary buttons
bg-indigo-600 hover:bg-indigo-700 text-white

// secondary buttons
bg-slate-100 text-slate-800

// text
text-gray-800

// accent
text-amber-500

# Dark

// background
bg-slate-900

// text
text-gray-100

// buttons
bg-indigo-500 hover:bg-indigo-600

// cards
bg-slate-800
