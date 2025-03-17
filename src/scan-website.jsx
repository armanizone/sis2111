import React from 'react';
import axios from 'axios';
import { Button, Input } from 'antd';

export const ScanWebsite = () => {

  const [url, setUrl] = React.useState('');

  const [loading, setLoading] = React.useState(false);

  const [response, setResponse] = React.useState('');

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  async function checkUrl() {
    setLoading(true);

    const options1 = {
      method: 'GET',
      url: import.meta.env.VITE_APP_CHECK_API,
      params: {
        url
      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_API_KEY,
        'x-rapidapi-host': import.meta.env.VITE_APP_CHECK_HOST
      }
    };

    const options2 = {
      method: 'POST',
      url: import.meta.env.VITE_APP_AI_API,
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_API_KEY,
        'x-rapidapi-host': import.meta.env.VITE_APP_AI_HOST,
        'Content-Type': 'application/json'
      },
      data: {
        system_prompt: '',
        temperature: 0.9,
        top_k: 5,
        top_p: 0.9,
        max_tokens: 256,
        web_access: false
      }
    };
    
    try {
      await axios.request(options1)
      .then(async response => {
        await axios.request({
            ...options2, 
            data: {
              ...options2.data, 
              messages: [{
                role: 'user', 
                content: `Дай мне краткое описание и анализ безопасности этого веб-сайта, напиши все возможные уязвимости и их вероятность, также дай общую оценку каждому пунтку и общее оценку безопасности: ${JSON.stringify(response.data?.data)}, также предоставьте рекомендации по улучшению, в конце ответа напиши "Проверка завершена"`
              }]
            }
          })
        .then(response2 => {
          console.log(response2.data, 'response2');
          setResponse(response2.result);
        })
        .catch(error => {
          console.error(error);
        })
      })
      .catch(error => {
        console.error(error);
      })


    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Проверка Безопасности Сайта</h1>
        <p className="text-gray-600 mb-8 text-center">Введите URL сайта для проверки потенциальных уязвимостей</p>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              disabled={loading}  
              value={url}
              onChange={handleUrlChange}
              type="text"
              placeholder="Введите URL сайта..."
              className="flex-1 px-4 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
            <Button
              disabled={loading}
              onClick={checkUrl}
              type="primary"
              size="large" 
              loading={loading}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Проверить Безопасность
            </Button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600">
              Наша проверка безопасности включает:
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Проверка SSL/TLS сертификата</li>
                <li>Анализ заголовков безопасности</li>
                <li>Обнаружение вредоносного ПО</li>
                <li>Сканирование уязвимостей</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}