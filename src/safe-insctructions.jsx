import React from 'react'

export const SafeInsctructions = () => {
  return (
    <div className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl w-full mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Рекомендации по Кибербезопасности</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Основные принципы безопасности</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Используйте сложные уникальные пароли для каждого аккаунта
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Включите двухфакторную аутентификацию везде, где это возможно
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Регулярно обновляйте программное обеспечение и операционную систему
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Используйте антивирусное ПО и держите его в актуальном состоянии
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Безопасность в интернете</h2>
          <div className="bg-green-50 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Не открывайте подозрительные ссылки и вложения в письмах
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Используйте VPN при подключении к публичным Wi-Fi сетям
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Проверяйте HTTPS-сертификаты сайтов перед вводом личных данных
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Регулярно проверяйте свои онлайн-аккаунты на подозрительную активность
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Защита данных</h2>
          <div className="bg-purple-50 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Регулярно создавайте резервные копии важных данных
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Используйте шифрование для защиты конфиденциальной информации
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Безопасно удаляйте ненужные данные с устройств
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                Ограничьте доступ к личным данным в социальных сетях
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Дополнительные рекомендации</h2>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                Используйте менеджер паролей для хранения учетных данных
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                Регулярно проводите аудит установленных приложений
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                Следите за последними новостями в сфере кибербезопасности
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                Обучайте членов семьи основам кибербезопасности
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
