# Middleware API

Middleware API is somewhat like the natural evolution of a former project that I made some time ago, the infamous [Students API](https://github.com/AdrianWR/StudentsAPI). In that project, designed for a job interview, we'd need to create a REST API to get and store students data from a school, a simple CRUD application built on top of the Python's famous Flask web framework.

In this case, Middleware API acts like a proxy API for the original project that inspired **Students API**, the [42 API](https://api.intra.42.fr/apidoc). We may use it as students from the 42 network to gather data from campuses and alumni all over the world. The access to this API requires an access token given by the OAuth2 authentication for students.  

