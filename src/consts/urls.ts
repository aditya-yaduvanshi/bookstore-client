export const BASE_URL = import.meta.env.VITE_API_URL || "";

// auth routes
export const LOGIN_PATH = `${BASE_URL}/api/v1/auth/login`;
export const SIGNUP_PATH = `${BASE_URL}/api/v1/auth/signup`;

// books routes
export const GET_PUBLISHED_BOOKS_PATH = `${BASE_URL}/api/v1/books/published`;
export const GET_USER_PUBLISHED_BOOKS_PATH = `${BASE_URL}/api/v1/books/user`;
export const PUBLISH_BOOK_PATH = `${BASE_URL}/api/v1/books/publish`;
export const UNPUBLISH_BOOK_PATH = `${BASE_URL}/api/v1/books/unpublish`;
export const SEARCH_BOOK_PATH = `${BASE_URL}/api/v1/books/search`;
