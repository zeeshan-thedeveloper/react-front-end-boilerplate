const { useDispatch, useSelector } = require('react-redux');

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = useDispatch;
const useAppSelector = useSelector;

module.exports = {
  useAppDispatch,
  useAppSelector,
};
