You have gotten your hands on quite a lot of books recently. You have decided to let your friends and family read these books so they can give you recommendations. In this exersice you are to simulate which books your friends and family might recommend.

Among your friends and family there are four types of people:
 - those who likes everything (called __Reader__)
 - academics who only like non-fiction (called __Academic__)
 - children who only want to read books for children (called __Child__)
 - detectives who like fiction but does not want to read crime fiction since they do not
want to bring home their work (called __Detective__)

You are to create a class hierarchy of the various types of books and people in this scenario. The following classes must be implemented:

- `Book` __abstract__ base class of all book types. This class contains the `title` of the book and a
pure virtual function `forChildrend`.
- `NonFiction` derived class of Book which overrides `forChildrend` to always return false.
- `Fiction` derived class of Book that stores a bool variable that determines whether or not
this is a childrens book. This class must override `forChildrend` such that it returns
the value of the bool variable.
- `CrimeFiction` is exactly the same as Fiction, but as we all know; crime dramas will
always become best sellers, so during construction this class should append the string
" (best seller)" to the end of the title.
- `Reader` base class for the different kinds of people among your friends and family. Contains the persons name, a virtual function `likes` that takes an object of type Book and
returns boolean as well as a function `read` which takes an object of type Book and prints
a message whether or not this person recommends the passed in book. The message
should have the following format: `<name of person> recommends reading <title
of book>` if the person likes the book and `<name of person> does not recommend
reading <title of book>` if they did not like the book.
- `Academic` derived class of Reader that overrides likes such that it returns true if the
passed in Book is of type NonFiction and false otherwise.
- `Child` derived class of Child that override likes such that it returns true only if `forChildrend` returns true for the given Book-parameter.
- `Detective` derived class of Reader that override likes if the Book-parameter is __exactly__ of type Fiction. Recall; the detective does not want to bring home their work, so no crime fiction for the detective.


This exersice is adapted from the C++ version of it, [source](https://www.ida.liu.se/~TDDD38/exam/old_exams/190821/TDDD38-190821.pdf)
