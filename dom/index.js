function elementor(selector){
    const element = document.querySelector(selector);


    return{
        attribute(key, value){
            element.setAttribute(key, value);
        
    
        return this;
    },
     text(content){
        element.textContent = content;

        return this;
     },
     class(className){
        element.classList.add(className);

        return this;
     },
     removeClass(className){
        element.classList.remove(className);

        return this;
     },
     on(eventName, handler){
        element.addEventListener(eventName, handler);

        
        return this;

     },
     click(handler){
        element.addEventListener('click', handler);
     }
}
};



let htmlTree ={
    tagName : 'div',
    attribute :[{
        key : 'id',
        value : 'content'
    },{
        key :'class',
        value :'hello world'
    }],
    children :[
        'salam',
        {
            tagName : 'p',
            attribute: [{key :'style', value: 'color:red'}],

        },
        {
            tagName :'button',
            attribute :[{key :'type', value:'submit'}],
            children :['click me']
        }
    ]
}


function render(elementModel){
    if(typeof elementModel ==='string'){
        return elementModel;
    }
    const element = document.createElement(elementModel.tagName);
    elementModel.attribute.forEach((attribute) =>{
        element.setAttribute(attribute.key, attribute.value)
    })

    elementModel.children.forEach((child)=>{
        element.append(render(child))
    })
    return element
}

const root = document.getElementById('app');

let formModel = [{
    id: "firstName",
    Type: "text",
    label: "نام:",
    placeholder: "نام خود را وارد کنید...",
    inputType: "text"
},
{
    id: "lastName",
    Type: "text",
    label: "نام خانوادگی:",
    placeholder: "نام خانوادگی خود را وارد کنید...",
    inputType: "text"
},
{
    id: "email",
    Type: "text",
    label: "ایمیل:",
    placeholder: "ایمیل خود را وارد کنید...",
    inputType: "email"
},
{
    id: "experiences",
    Type: "select",
    label: "میزان سابقه:",
    options: [
        { value: '1', label: '1 سال'},
        { value: '2', label: '2 سال'},
        { value: '3', label: '3 سال'},
        { value: '4', label: '4 سال'},
        { value: 'more-than-4', label: 'بیش از 4 سال'}
    ]
}]



function renderForm(inputs){
    const formElement = document.createElement('form');

    inputs.forEach((input)=>{
        if(input.type === 'text'){
            const inputElement = document.createElement('input');

            inputElement.setAttribute('placeholder', input.placeholder);
            inputElement.setAttribute('type', input.inputType);
            inputElement.setAttribute('id', input.id);

            formElement.append(input.label)
            formElement.append(inputElement)

            
        }else if(input.type=== 'select'){
            const selectElement = document.createElement('select');

            inputElement.setAttribute('id', input.id);
            input.option.forEach((option)=>{
                const optionElement = document.createElement('option');

                optionElement.setAttribute('value', option.value);
                optionElement.append(option.label)
                    
                    selectElement.append(optionElement)
            })
            formElement.append(input.label);
            formElement.append(selectElement);

        }
    })
    document.body.append(formElement)
}
renderForm(formModel);