import React from 'react';
import { Base } from './Base';

export const UserProfile = () => {
  const user = {
    username: 'Rachana G Raikar',
    email: 'rachanagraikar@gmail.com',
    bio: 'Blogger',
    about: 'Passionate blogger and web developer. I love sharing my thoughts on various topics, including technology, lifestyle, and more. Join me on this exciting journey!',
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
    twitter: 'https://twitter.com/johndoe',
    facebook: 'https://facebook.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    followers: 0,
    following: 0,
    role: 'Author',
    userid: '12345',
  };

  const userStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  const avatarStyles = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: '20px',
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const h1Styles = {
    fontSize: '3rem',
    fontFamily: 'sans-serif',
    margin: '0',
    color: '#333',
  };

  const userIdStyles = {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '10px',
  };

  const roleStyles = {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '10px',
  };

  const emailStyles = {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '10px',
  };

  const bioStyles = {
    fontSize: '1.2rem',
    color: '#777',
    marginBottom: '20px',
  };

  const aboutStyles = {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    color: '#444',
    marginBottom: '20px',
  };

  const followCountStyles = {
    display: 'flex',
    marginBottom: '20px',
  };

  const followCountItemStyles = {
    margin: '0',
    marginRight: '20px',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
  };

  const strongStyles = {
    marginRight: '5px',
    color: '#333',
  };

  const socialStyles = {
    marginTop: '20px',
  };

  const iconStyles = {
    textDecoration: 'none',
    color: '#007BFF',
    marginRight: '20px',
    fontSize: '1.5rem',
    transition: 'color 0.2s',
  };

  return (
    <Base>
      <div style={userStyles}>
        <div style={avatarStyles}>
          <img src={user.avatar} alt={`${user.username}'s avatar`} style={imageStyles} />
        </div>
        <h1 style={h1Styles}>{user.username}</h1>
        <p style={aboutStyles}>{user.about}</p>
        <p style={emailStyles}>{user.email}</p>
        <p style={bioStyles}>{user.bio}</p>
        <p style={roleStyles}>Role: {user.role}</p>
        <p style={userIdStyles}>User ID: {user.userid}</p>
         <div style={followCountStyles}>
          <p style={followCountItemStyles}>
            <strong style={strongStyles}>{user.followers}</strong> Followers
          </p>
          <p style={followCountItemStyles}>
            <strong style={strongStyles}>{user.following}</strong> Following
          </p>
        </div>
        <div style={socialStyles}>
          <a href={user.twitter} target="_blank" rel="noopener noreferrer" style={iconStyles}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href={user.facebook} target="_blank" rel="noopener noreferrer" style={iconStyles}>
            <i className="fab fa-facebook"></i>
          </a>
          <a href={user.linkedin} target="_blank" rel="noopener noreferrer" style={iconStyles}>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </Base>
  );
};
