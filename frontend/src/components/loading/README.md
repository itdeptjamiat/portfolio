# Loading Components

A comprehensive collection of loading components and utilities for React applications.

## Components

### 1. Loader

A full-screen loading component with multiple spinner types and customizable options.

```jsx
import { Loader } from './components/loading'

// Basic usage
<Loader />

// With custom options
<Loader
  type="pulse"
  size="xl"
  text="Loading data..."
  subtitle="Please wait while we fetch your content"
  showProgress={true}
  progress={75}
/>
```

**Props:**

- `type`: 'spinner' | 'pulse' | 'dots' | 'bars' | 'ring' | 'cube'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `text`: Loading text
- `subtitle`: Subtitle text
- `showProgress`: Show progress bar
- `progress`: Progress percentage (0-100)
- `className`: Additional CSS classes

### 2. SuspenseLoader

Specialized loader for Suspense fallback with animated progress and status indicators.

```jsx
import { SuspenseLoader } from './components/loading';

<Suspense fallback={<SuspenseLoader pageName='About' />}>
  <About />
</Suspense>;
```

**Props:**

- `pageName`: Name of the page being loaded
- `showProgress`: Show progress bar (default: true)
- `className`: Additional CSS classes

### 3. Spinner

Simple spinner component for smaller loading states.

```jsx
import { Spinner } from './components/loading'

// Basic usage
<Spinner />

// With options
<Spinner
  size="lg"
  color="primary"
  showText={true}
  text="Loading..."
/>
```

**Props:**

- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `color`: 'primary' | 'secondary' | 'accent' | 'gray' | 'white'
- `showText`: Show loading text
- `text`: Loading text
- `className`: Additional CSS classes

### 4. LoadingButton

Button component with built-in loading state and spinner.

```jsx
import { LoadingButton } from './components/loading';

<LoadingButton
  loading={isSubmitting}
  loadingText='Saving...'
  variant='primary'
  size='md'
>
  Save Changes
</LoadingButton>;
```

**Props:**

- `loading`: Loading state
- `loadingText`: Text to show when loading
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `disabled`: Disabled state
- `className`: Additional CSS classes

### 5. LoadingSkeleton

Skeleton loading component for content placeholders.

```jsx
import { LoadingSkeleton } from './components/loading'

// Card skeleton
<LoadingSkeleton type="card" lines={3} />

// Text skeleton
<LoadingSkeleton type="text" lines={5} />

// Grid skeleton
<LoadingSkeleton type="grid" />
```

**Props:**

- `type`: 'card' | 'text' | 'avatar' | 'list' | 'table' | 'grid'
- `lines`: Number of text lines
- `animate`: Enable shimmer animation
- `className`: Additional CSS classes

## Hooks

### useLoading

Basic loading state management hook.

```jsx
import { useLoading } from '../hooks/useLoading';

const { loading, error, startLoading, stopLoading, retry } = useLoading();

const handleSubmit = async () => {
  startLoading();
  try {
    await submitData();
  } catch (err) {
    // Error handled automatically
  } finally {
    stopLoading();
  }
};
```

### useAsyncLoading

Hook for managing async operations with loading states.

```jsx
import { useAsyncLoading } from '../hooks/useLoading';

const { loading, error, execute } = useAsyncLoading(async data => {
  return await api.post('/endpoint', data);
});

const handleSubmit = () => {
  execute(formData);
};
```

### useDelayedLoading

Hook for delayed loading states (prevents flickering).

```jsx
import { useDelayedLoading } from '../hooks/useLoading';

const { loading, showLoading, startLoading, stopLoading } =
  useDelayedLoading(300);

// Only show loading after 300ms delay
{
  showLoading && <Spinner />;
}
```

## Usage Examples

### 1. Page Loading with Suspense

```jsx
import { Suspense } from 'react';
import { SuspenseLoader } from './components/loading';

function App() {
  return (
    <Suspense fallback={<SuspenseLoader pageName='Home' />}>
      <Home />
    </Suspense>
  );
}
```

### 2. Form Submission

```jsx
import { LoadingButton } from './components/loading';
import { useLoading } from '../hooks/useLoading';

function ContactForm() {
  const { loading, startLoading, stopLoading } = useLoading();

  const handleSubmit = async data => {
    startLoading();
    try {
      await submitForm(data);
    } finally {
      stopLoading();
    }
  };

  return (
    <LoadingButton
      loading={loading}
      loadingText='Sending...'
      onClick={handleSubmit}
    >
      Send Message
    </LoadingButton>
  );
}
```

### 3. Content Loading

```jsx
import { LoadingSkeleton } from './components/loading';
import { useLoading } from '../hooks/useLoading';

function ProjectsList() {
  const { loading } = useLoading();

  if (loading) {
    return <LoadingSkeleton type='grid' />;
  }

  return <ProjectsGrid projects={projects} />;
}
```

### 4. API Loading States

```jsx
import { useAsyncLoading } from '../hooks/useLoading';
import { Spinner } from './components/loading';

function DataComponent() {
  const { loading, error, execute } = useAsyncLoading(fetchData);

  useEffect(() => {
    execute();
  }, []);

  if (loading) {
    return <Spinner size='lg' showText />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return <DataDisplay data={data} />;
}
```

## Best Practices

1. **Use appropriate loading types**: Use `SuspenseLoader` for page transitions, `Spinner` for small actions, and `LoadingSkeleton` for content loading.

2. **Implement delayed loading**: Use `useDelayedLoading` to prevent loading flicker for fast operations.

3. **Provide feedback**: Always show loading states for user actions that take time.

4. **Handle errors gracefully**: Use error boundaries and provide retry mechanisms.

5. **Optimize performance**: Use code splitting with Suspense for better performance.

6. **Accessibility**: Ensure loading states are accessible to screen readers.

## Customization

All components support custom styling through Tailwind classes and can be extended with additional props as needed.

```jsx
// Custom styled loader
<Loader
  className='bg-gradient-to-r from-blue-500 to-purple-600'
  text='Custom Loading Text'
/>
```

## Performance Tips

1. **Lazy load components**: Use React.lazy() with Suspense for code splitting
2. **Preload critical components**: Use preloading strategies for important pages
3. **Optimize bundle size**: Keep loading components lightweight
4. **Use appropriate timeouts**: Set reasonable timeout values for loading states
