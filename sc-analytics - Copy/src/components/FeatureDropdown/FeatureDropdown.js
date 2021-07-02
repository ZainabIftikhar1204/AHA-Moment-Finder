import {React, useState} from 'react';
import '../../App.css';
import FeatureHelp from '../FeatureHelp/FeatureHelp';

// import { Multiselect } from 'multiselect-react-dropdown';




const features = ['1', '2', '3', '4', '5'];
// const corr_features = features.splice(index,);
let corr_array = [...features];

export default function FeatureDropdown(){
    
    const [mainFeat, setMainFeat] = useState(features[0]);

    const selectMainFeat = () =>{
        let selection = document.querySelector('select');
        let val = selection.options[selection.selectedIndex].value;
        setMainFeat(val);

        let main_feat_index = features.indexOf(mainFeat);
        console.log('i am index');
        console.log(main_feat_index);
        //let corr_array = [...features];
        corr_array.splice(main_feat_index,1 );
    }

  

    console.log('I am main feature');
    console.log(mainFeat);
    
    console.log('We are corr features:');
    console.log(corr_array);

    return(
        <div>
            <FeatureHelp/>
            <div className='mainFeature' style={{paddingBottom:'5px', marginBottom:'20px'}}>
                <label>
                    <h4>Select your Main Feature:</h4>
                    <select className='MainFeatDrop' id='mainFeat' onChange={selectMainFeat}>
                        {features.map(feature => (
                            <option key={feature} value={feature}  >
                                {feature}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <div className='corrFeature'>
              {/*  <label>
                    <h4>Select your Correlation Feature/s:</h4>
                    <select className='FeatDrop'>
                        {features.map(feature => (
                            <option key={feature} value={feature}>
                                {feature}
                            </option>
                        ))}
                    </select>
                </label>*/}
                
                {/* <h4>Select your Correlation Feature/s:</h4>
                <div className='multi-align'>
                    <Multiselect
                        options = {corr_array}
                        isObject={false}
                        closeIcon="cancel"
                        id="css_custom"
                        style={ {chips: { backgroundColor: "#00dbdb" }, 
                        multiselectContainer: {color: "teal"},
                        searchBox: {"border-radius": "15px" , 'background-color':'teal', 'color': 'white' ,'width':'55%', 'min-height':'38px',"font-size": "25px"}, 
                        'alignSelf':'center' } }
                    />
                </div> */}
            </div>
        </div>
    )
}
