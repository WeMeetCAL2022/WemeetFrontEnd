const PublicRoute = ({children}) => {
    const token = localStorage.getItem('token');

    if(token) {
        window.location.href = "/home";
    } else {
        return children;
    }
};

export default PublicRoute;