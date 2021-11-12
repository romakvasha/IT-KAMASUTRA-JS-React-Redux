import React from "react";
import s from "./Users.module.css";
import usersPhoto from "../../assets/images/usersPhoto.jpg";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            className={props.currentPage === p && s.selectedPage}
            onClick={(e) => {
              props.onPageChanget(p);
            }}
          >
            {p}
          </span>
        );
      })}
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : usersPhoto}
                className={s.usersPhoto}
                alt="аватарка"
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{/*u.location.country*/}</div>
              <div>{/*u.location.city*/}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
