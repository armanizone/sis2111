import { Button, Input, Spin } from "antd";
import React from "react";

export const HashPassword = () => {
  const [password, setPassword] = React.useState("");
  const [hash, setHash] = React.useState("");


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleHashPassword = async () => {
    const msgBuffer = new TextEncoder().encode(password);

    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);

    const newHash = Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    setHash(newHash);
  };

  const handleCopyHash = () => {
    navigator.clipboard.writeText(hash);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-2xl p-4 sm:p-6 md:p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Хэширование Пароля</h1>
        <p className="text-gray-600 mb-8 text-center">Введите пароль для создания безопасного хэша</p>
        
        <div className="space-y-6">
          <div>
            <Input
              placeholder="Введите пароль..."
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-3 border rounded-lg"
              size="large"
            />
          </div>

          <Button 
            type="primary"
            onClick={handleHashPassword}
            size="large"
            className="w-full"
          >
            Хэшировать
          </Button>

          {hash && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-gray-800 font-medium mb-2">Сгенерированный хэш (SHA-256):</h3>
              <div className="break-all text-gray-600">{hash}</div>
              <Button
                type="primary"
                onClick={handleCopyHash}
                size="large"
                className="mt-4"
              >
                Скопировать хэш
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
