'use client';

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import '../EditProfile/EditProfile.css';
import toast from 'react-hot-toast';
import { useAuth } from "../components/context/AuthContext";

const Profile: React.FC = () => {
  const router = useRouter();
  const { user, setUser } = useAuth();
  const [profile, setProfile] = useState<ProfileType>({
    username: '',
    email: '',
    id: '',
  });

  const [passwords, setPasswords] = useState<Passwords>({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  useEffect(() => {
    if (user) {
      setProfile({
        username: user.username,
        email: user.email,
        id: user.id,
      });
    }
  }, [user]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      toast.error('User not logged in!');
      return;
    }

    if (
      passwords.newPassword &&
      passwords.newPassword !== passwords.confirmNewPassword
    ) {
      toast.error('New passwords do not match!');
      return;
    }

    const updateFields: Partial<ProfileType & Passwords> = {
      username: profile.username,
      email: profile.email,
    };

    if (passwords.currentPassword && passwords.newPassword) {
      updateFields.currentPassword = passwords.currentPassword;
      updateFields.newPassword = passwords.newPassword;
    }

    axios
      .put(`http://localhost:4000/api/auth/update/${user.id}`, updateFields)
      .then((response) => {
        const updatedUser = { ...user, ...response.data.user };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
        console.log('userloggedin',response.data);
        router.push('/');
        toast.success('Profile updated successfully!');
      })
      .catch((error) => {
        toast.error(
          error.response?.data?.message ||
          'There was an error updating the profile!'
        );
        console.error('There was an error updating the profile!', error);
      });
  };

  return (
    <div className="profile">
      <div id="updateprofile">
        <form onSubmit={submit}>
          <div className="profile-form">
            <h1>Edit Your Profile</h1>
            <div className="inputs">
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={profile.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              </div>
              <div className="password-changes">
                <label>Password Changes</label>
                <div className="form-group">
                  <label>Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    placeholder="Current Password"
                    value={passwords.currentPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="New Password"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmNewPassword"
                    placeholder="Confirm New Password"
                    value={passwords.confirmNewPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => router.push('/')}
                >
                  Cancel
                </button>
                <button type="submit"  className="save-btn">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
