import { Button, Input } from 'antd';
import React from 'react'

export const InjectionsDetector = () => {

  const [query, setQuery] = React.useState('');
  const [errors, setErrors] = React.useState([]);
  const [queryChecked, setQueryChecked] = React.useState(false);

  const validateQuery = () => {
    setQueryChecked(true);
    const newErrors = [];

    // Common SQL injection patterns
    const sqlInjectionPatterns = [
      /'.*'/, // String literals
      /;.*/, // Multiple statements
      /--.*/, // Comments
      /\/\*.*\*\//, // Multi-line comments
      /UNION\s+(?:ALL\s+)?SELECT/i, // UNION-based
      /OR\s+['"]?\w+['"]?\s*=\s*['"]?\w+['"]?/i, // OR-based boolean
      /AND\s+['"]?\w+['"]?\s*=\s*['"]?\w+['"]?/i, // AND-based boolean
      /EXEC\s*\(\s*xp_/i, // Extended stored procedures
      /DROP\s+TABLE/i, // Table dropping
      /INSERT\s+INTO/i, // Insertions
      /UPDATE\s+\w+\s+SET/i, // Updates
      /DELETE\s+FROM/i, // Deletions
      /WAITFOR\s+DELAY/i, // Time-based
      /BENCHMARK\(/i, // Performance-based
      /SLEEP\(/i, // Time-based
    ];

    // Check for empty query
    if (!query.trim()) {
      newErrors.push('SQL-запрос не может быть пустым');
      setErrors(newErrors);
      return;
    }

    // Check each pattern
    sqlInjectionPatterns.forEach(pattern => {
      if (pattern.test(query)) {
        switch(pattern.toString()) {
          case '/\'.*\'/':
            newErrors.push('Обнаружены подозрительные строковые литералы');
            break;
          case /;.*/.toString():
            newErrors.push('Обнаружены множественные SQL-выражения');
            break;
          case /--.*/.toString():
            newErrors.push('Обнаружены SQL-комментарии');
            break;
          case /\/\*.*\*\//.toString():
            newErrors.push('Обнаружены многострочные комментарии');
            break;
          case /UNION\s+(?:ALL\s+)?SELECT/i.toString():
            newErrors.push('Обнаружена UNION-инъекция');
            break;
          case /OR\s+['"]?\w+['"]?\s*=\s*['"]?\w+['"]?/i.toString():
            newErrors.push('Обнаружена булева OR-инъекция');
            break;
          case /AND\s+['"]?\w+['"]?\s*=\s*['"]?\w+['"]?/i.toString():
            newErrors.push('Обнаружена булева AND-инъекция');
            break;
          case /EXEC\s*\(\s*xp_/i.toString():
            newErrors.push('Обнаружена попытка выполнения хранимых процедур');
            break;
          case /DROP\s+TABLE/i.toString():
            newErrors.push('Обнаружена попытка удаления таблицы');
            break;
          case /INSERT\s+INTO/i.toString():
            newErrors.push('Обнаружена попытка вставки данных');
            break;
          case /UPDATE\s+\w+\s+SET/i.toString():
            newErrors.push('Обнаружена попытка обновления данных');
            break;
          case /DELETE\s+FROM/i.toString():
            newErrors.push('Обнаружена попытка удаления данных');
            break;
          case /WAITFOR\s+DELAY/i.toString():
          case /BENCHMARK\(/i.toString():
          case /SLEEP\(/i.toString():
            newErrors.push('Обнаружена временная инъекция');
            break;
        }
      }
    });

    setErrors(newErrors);
  };
  

  return (
    <div className="bg-white rounded-lg shadow-2xl p-4 sm:p-6 md:p-8 max-w-2xl w-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Детектор SQL-инъекций</h1>
      <p className="text-gray-600 mb-8 text-center">Введите SQL-запрос для проверки на наличие инъекций</p>
      
      <div className="space-y-6">
        <div>
          <Input.TextArea
            rows={4}
            placeholder="Введите SQL-запрос..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <Button 
          type="primary"
          onClick={validateQuery}
          size="large"
          className="w-full"
        >
          Проверить запрос
        </Button>

        {errors.length > 0 && (
          <div className="mt-4 p-4 bg-red-50 rounded-lg">
            <h3 className="text-red-800 font-medium mb-2">Обнаружены потенциальные уязвимости:</h3>
            <ul className="list-disc list-inside space-y-1">
              {errors.map((error, index) => (
                <li key={index} className="text-red-600">{error}</li>
              ))}
            </ul>
          </div>
        )}

        {!errors.length && queryChecked && (
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <p className="text-green-600">SQL-запрос безопасен</p>
          </div>
        )}
      </div>
    </div>
  )
}
