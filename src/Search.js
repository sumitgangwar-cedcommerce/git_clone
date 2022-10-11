import {Autocomplete, Icon, Page} from '@shopify/polaris';
import {SearchMinor} from '@shopify/polaris-icons';
import {useState, useCallback, useMemo, useEffect} from 'react';
import { connect } from 'react-redux';
import GithubCard from './component/githubCard';
import { mapDispatchToProps, mapStateToProps } from './redux/selector';

function Search(props) {

  console.log(props)
  const [data , setData] = useState([])
  const [card , setCard] = useState({show : false , data : {}})
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const deselectedOptions = useMemo(
    () => [
      ...data.map(item => ({label : item.login , value : item.login}))
    ],
    [data],
  );
  const [options, setOptions] = useState(deselectedOptions);


  useEffect(()=>{
    fetch(' https://api.github.com/users', {headers :{Authorization : 'Bearer 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'}})
    .then(res => res.json())
    .then(res => setData(res))
  },[])

  useEffect(()=>{
    // console.log(selectedOptions[0])
    if(selectedOptions.length){
      fetch(`https://api.github.com/users/${selectedOptions[0]}`,{headers :{Authorization : 'Bearer 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'}})
      .then(res => res.json())
      .then(res => {
                      setCard(prev => ({show : true , data : res}))
                      sessionStorage.setItem('state' , JSON.stringify(res))
                      props.saveData(res)
                    })
    }
  },[selectedOptions])



 


  

  const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (value === '') {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, 'i');
      const resultOptions = deselectedOptions.filter((option) =>
        option.label.match(filterRegex),
      );
      setOptions(resultOptions);
    },
    [deselectedOptions],
  );

  const updateSelection = useCallback(
    (selected) => {
      const selectedValue = selected.map((selectedItem) => {
        const matchedOption = options.find((option) => {
          return option.value.match(selectedItem);
        });
        return matchedOption && matchedOption.label;
      });

      setSelectedOptions(selected);
      setInputValue(selectedValue[0]);
    },
    [options],
  );

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label="Search Github User"
      value={inputValue}
      prefix={<Icon source={SearchMinor} color="base" />}
      placeholder="Search"
    />
  );

  return (<>
      <Page>
      <Autocomplete
        options={options}
        selected={selectedOptions}
        onSelect={updateSelection}
        textField={textField}
      />
      </Page>

    <div>
      {
        card.show && <GithubCard  />
      }
    </div>
    </>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)