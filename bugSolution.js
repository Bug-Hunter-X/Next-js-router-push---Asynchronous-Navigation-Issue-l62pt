```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = async () => {
    await router.push('/another-page');
    // Now this code will execute AFTER the route change
    console.log('Route change completed');
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent;
```