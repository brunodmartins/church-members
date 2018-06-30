import React from 'react';

const Home = ({auth}) => {
    if(!auth.isAuthenticated()) {
      console.log("Usuario não autenticado");
      auth.login();
    }

    return (
        <div/>
    );
};

export default Home;
