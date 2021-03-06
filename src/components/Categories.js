import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckStatusFunc } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const UpdateCategoryStatus = () => dispatch(CheckStatusFunc());
  const CategoriesStatus = useSelector((state) => state.CategoriesReducer);
  return (
    <div className="category-container">
      {CategoriesStatus.map((status) => <h1 className="title" key={status}>{status}</h1>)}
      <button type="button" className="update-button" onClick={UpdateCategoryStatus}>Check Status </button>
    </div>
  );
};

export default Categories;
