# API Setup Documentation

This document describes the comprehensive API setup using Axios for the React portfolio application.

## 📁 File Structure

```
src/
├── utils/
│   └── axiosInstance.js      # Main Axios configuration
├── hooks/
│   └── useApi.js            # Custom hooks for API calls
├── services/
│   └── apiService.js        # Service functions for different APIs
└── components/
    ├── ProjectsList.jsx     # Example component using API
    └── ContactForm.jsx      # Example form with API integration
```

## 🚀 Quick Start

### 1. Basic Usage

```javascript
import { api } from '../utils/axiosInstance';

// Simple GET request
const { data } = await api.get('/projects');

// POST request with data
const result = await api.post('/contact', { name: 'John', message: 'Hello' });
```

### 2. Using Custom Hooks

```javascript
import { useFetch, useMutation } from '../hooks/useApi';

// Fetch data on component mount
function ProjectsList() {
  const { data, loading, error, refetch } = useFetch('/projects');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{/* render projects */}</div>;
}

// Form submission
function ContactForm() {
  const { post, loading, error, success } = useMutation();

  const handleSubmit = async formData => {
    await post('/contact', formData);
  };
}
```

## 🔧 Configuration

### Axios Instance Setup

The main Axios instance is configured in `utils/axiosInstance.js`:

- **Base URL**: `http://localhost:5000/api` (configurable via environment variable)
- **Timeout**: 10 seconds
- **Headers**: JSON content type
- **Interceptors**: Request/response logging and error handling

### Environment Variables

Create a `.env` file in the frontend directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## 📡 API Endpoints

### Projects

```javascript
// Get all projects
GET /api/projects

// Get project by ID
GET /api/projects/:id

// Create project
POST /api/projects

// Update project
PUT /api/projects/:id

// Delete project
DELETE /api/projects/:id
```

### Contact

```javascript
// Send contact message
POST / api / contact;

// Get messages (admin)
GET / api / contact / messages;
```

### Skills

```javascript
// Get all skills
GET / api / skills;

// Get skill categories
GET / api / skills / categories;
```

### Experience

```javascript
// Get all experience
GET / api / experience;

// Get work experience
GET / api / experience / work;

// Get education
GET / api / experience / education;
```

## 🎣 Custom Hooks

### useApi Hook

General-purpose hook for API calls:

```javascript
import { useApi } from '../hooks/useApi';

function MyComponent() {
  const { get, post, loading, error, data, reset } = useApi();

  const fetchData = async () => {
    const result = await get('/api/data');
  };

  const submitData = async formData => {
    await post('/api/submit', formData);
  };
}
```

### useFetch Hook

Hook for fetching data on component mount:

```javascript
import { useFetch } from '../hooks/useApi';

function ProjectsList() {
  const { data, loading, error, refetch } = useFetch('/api/projects');

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <div>{/* render data */}</div>}
    </div>
  );
}
```

### useMutation Hook

Hook for mutations (POST, PUT, PATCH, DELETE):

```javascript
import { useMutation } from '../hooks/useApi';

function ContactForm() {
  const { post, loading, error, success } = useMutation();

  const handleSubmit = async formData => {
    try {
      await post('/api/contact', formData);
      // Handle success
    } catch (error) {
      // Handle error
    }
  };
}
```

### useUpload Hook

Hook for file uploads:

```javascript
import { useUpload } from '../hooks/useApi';

function FileUpload() {
  const { upload, loading, error } = useUpload();

  const handleFileUpload = async file => {
    const onProgress = progressEvent => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      console.log(`Upload progress: ${percentCompleted}%`);
    };

    await upload('/api/upload', file, onProgress);
  };
}
```

## 🛠️ Service Functions

### Projects Service

```javascript
import { projectsService } from '../services/apiService';

// Get all projects
const projects = await projectsService.getAll();

// Get project by ID
const project = await projectsService.getById('123');

// Create project
const newProject = await projectsService.create({
  title: 'My Project',
  description: 'Project description',
  technologies: ['React', 'Node.js'],
});

// Update project
await projectsService.update('123', { title: 'Updated Title' });

// Delete project
await projectsService.delete('123');

// Upload project image
await projectsService.uploadImage(file, onProgress);
```

### Contact Service

```javascript
import { contactService } from '../services/apiService';

// Send message
await contactService.sendMessage({
  name: 'John Doe',
  email: 'john@example.com',
  subject: 'Project Inquiry',
  message: 'Hello, I would like to discuss a project.',
});
```

### Auth Service

```javascript
import { authService } from '../services/apiService';

// Login
const user = await authService.login({
  email: 'user@example.com',
  password: 'password',
});

// Register
await authService.register({
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password',
});

// Logout
await authService.logout();

// Get profile
const profile = await authService.getProfile();
```

## 🔒 Authentication

### Token Management

```javascript
import { setAuthToken, getAuthToken } from '../utils/axiosInstance';

// Set token
setAuthToken('your-jwt-token');

// Get token
const token = getAuthToken();

// Clear token
setAuthToken(null);
```

### Automatic Token Handling

The Axios instance automatically:

- Adds the Authorization header with the token from localStorage
- Handles 401 errors by clearing the token and redirecting to login
- Refreshes tokens when needed

## 🚨 Error Handling

### Error Types

```javascript
// Validation error
{
  type: 'validation',
  message: 'Invalid request data',
  errors: ['Email is required', 'Name is required']
}

// Authentication error
{
  type: 'auth',
  message: 'Authentication required'
}

// Permission error
{
  type: 'permission',
  message: 'Access denied'
}

// Network error
{
  type: 'network',
  message: 'Network error - please check your connection'
}
```

### Error Handling in Components

```javascript
import { handleApiError } from '../utils/axiosInstance';

try {
  const data = await api.get('/projects');
} catch (error) {
  const errorInfo = handleApiError(error);

  switch (errorInfo.type) {
    case 'validation':
      // Handle validation errors
      break;
    case 'auth':
      // Handle authentication errors
      break;
    case 'network':
      // Handle network errors
      break;
    default:
    // Handle other errors
  }
}
```

## 📊 Caching

### Cache Service

```javascript
import { cacheService } from '../services/apiService';

// Set cache
cacheService.set('projects', projectsData);

// Get cache
const cachedData = cacheService.get('projects');

// Clear specific cache
cacheService.clear('projects');

// Clear all cache
cacheService.clear();
```

## 🔍 Search

### Search Service

```javascript
import { searchService } from '../services/apiService';

// Search projects
const results = await searchService.searchProjects('react', {
  category: 'web',
  technology: 'javascript',
});

// Search skills
const skills = await searchService.searchSkills('react');
```

## 📈 Analytics

### Analytics Service

```javascript
import { analyticsService } from '../services/apiService';

// Track page view
await analyticsService.trackPageView({
  page: '/projects',
  title: 'Projects Page',
  url: window.location.href,
});

// Track event
await analyticsService.trackEvent({
  event: 'project_view',
  project_id: '123',
  category: 'engagement',
});
```

## 🧪 Testing

### Mock API for Testing

```javascript
// In your test file
import { api } from '../utils/axiosInstance';

// Mock the API
jest.mock('../utils/axiosInstance', () => ({
  api: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  },
}));

// Test API call
test('fetches projects', async () => {
  const mockProjects = [{ id: 1, title: 'Project 1' }];
  api.get.mockResolvedValue({ data: mockProjects });

  const result = await api.get('/projects');
  expect(result.data).toEqual(mockProjects);
});
```

## 🚀 Best Practices

1. **Use Custom Hooks**: Prefer `useFetch`, `useMutation`, and `useUpload` over direct API calls
2. **Error Handling**: Always handle errors appropriately in components
3. **Loading States**: Show loading indicators during API calls
4. **Caching**: Use cache service for frequently accessed data
5. **Environment Variables**: Use environment variables for API URLs
6. **TypeScript**: Consider adding TypeScript for better type safety
7. **Testing**: Mock API calls in tests for reliable testing

## 📝 Example Usage

See the following example components:

- `components/ProjectsList.jsx` - Fetching and displaying projects
- `components/ContactForm.jsx` - Form submission with API integration

These components demonstrate real-world usage of the API utilities and can serve as templates for your own implementations.
