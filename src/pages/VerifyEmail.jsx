import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

function VerifyEmail() {
  const [message, setMessage] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token');
      if (token) {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/auth/verify-email?token=${token}`,
          );
          setMessage(response.data.message);
        } catch (error) {
          setMessage(error.response.data.message);
        }
      }
    };

    verifyEmail();
  }, [searchParams]);

  return (
    <div className="max-w-md mx-auto m-10">
      <h2 className="text-2xl font-bold mb-4">Подтверждение Email</h2>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
}

export default VerifyEmail;
