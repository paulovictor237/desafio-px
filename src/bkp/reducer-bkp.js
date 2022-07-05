import axios from 'axios';
import { createContext, ReactNode, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';

// cria os dados do contexto
const CreateData = () => {
  const hello = { word: 'hello' };

  const tableHeader = ['ID', 'City', 'Abbreviation', 'Conference', 'Division', '']

  // const [tableData, setTableData] = useState([]);

  const [tableData, setTableData] = useReducer((state, action) => {
    switch (action.type) {
      case 'insert':
        return {
          data: action.data.slice(0, 4),
          fullData: action.data
        };
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }, { data: [], fullData: [], count: 0 });

  const getNBATeamData = async () => {
    const response = await axios.get('https://www.balldontlie.io/api/v1/teams');
    // const tempData = await response.data.data.slice(1, 5);
    const tempData = await response.data.data
    // setTableData(tempData);
    setTableData({ type: 'insert', data: tempData })
    setTableData({ type: 'increment' })
  };

  useEffect(() => {
    getNBATeamData();
  }, []);

  return { hello, tableHeader, tableData: [] };
}

// cria contexto e provedor
// createContext -> { Provider , Consumer, displayName }
const MyContext = createContext({})
MyContext.displayName = 'MyContext';

export function MyContextProvider({ children }) {
  const data = CreateData()
  return (
    <MyContext.Provider value={data}>
      {children}
    </MyContext.Provider>
  );
}

// custom hook para evitar de ter que importar o contexto
export function useCustomRootData() {
  const context = useContext(MyContext);
  return context;
}