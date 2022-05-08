import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className="blog">
                <h1>Difference between javascript and node js</h1>
                <p><strong>JavaScript</strong> is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment. It is a very strong language normally used for a web application on any verification or any specific business logic. We need to append in the screen without page refreshing. JavaScript also helps to use Ajax at any time, which helps us call any server-side script for given dynamic data based on the requirement. It also helps with generating dynamic HTML tables based on business requirement. JQuery is one of the popular libraries to make comfortable use of JavaScript by avoiding to write a lot of code.
                </p>
                <p>
                <strong>Node.js</strong> also holds a lot of relative libraries, which we normally use in javascript for general purpose programming language. It is actually a kind of environment or interpreter that can represent JavaScript or run any javascript program. It mainly helps us execute some non-blocking operation like some operating system special information like certificate details or hardware details; we may use node js on the same, which help us do it, and JavaScript normal programming will not help us on the same. Normally all browsers have a JavaScript engine that helps us to run javascript in a web browser. Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome) are some popular javascript engine using verities browsers. But node js is using the V8 engine directly, with some libraries to do some I/O or networking operations. It actually helps us use JavaScript from outside of the browser, like creating, writing or executing one shell script, some back-end services, or running on hardware. Let us understand  JavaScript vs Node JS in detail.</p>
            </div>
            <div className="blog">
                <h1>When should you use node js and when should you use mongodb</h1>
                <p>
                    Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.
                </p>
                <p>
                    MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.
                </p>
            </div>
            <div className="blog">
                <h1>Differences between sql and nosql databases.</h1>
                <p><strong>SQL</strong> or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis. SQL is widely used by top tech companies like Facebook, Whatsapp, etc for data processing solutions. It is used for different types of RDBMS including Oracle, MySQL, SQLServer, etc.</p>
                <p><strong>NoSQL</strong> database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. It was introduced by Carl Stroz in the year 1998 called a Non-relational database. Now, it stands for Not only SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form. Companies like Twitter and Google, with a tremendous amount of data set like the user data of the social platforms, prefer to use NoSQL over any other RDBMS.</p>
            </div>
            <div className="blog">
                <h1>What is the purpose of jwt and how does it work</h1>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            </div>
        </div>
    );
};

export default Blogs;