const name1=document.getElementById('name');
const dob=document.getElementById('DateOfBirth');
const mob=document.getElementById('mobno');
const pass=document.getElementById('pass');
const oput=document.getElementById('oput');
function testOfStrength()
{
    const data1=name1.value;
    const data2=pass.value;
    const data3=dob.value;
    const data4=mob.value;
    let k=0,m=0;
    const arr=['!','@','#','$','&','(',')','/','[',']','{','}'];
    const arr1=['1','2','3','4','5','6','7','8','9','0'];
    //data4=data4.toString();
    if(data2.length<8){

        const newElement=document.createElement('p');
        const newText=document.createTextNode("Your Password is  Weak!!!\n It should contain more than 8 characters");
        oput.append(newElement);
        newElement.appendChild(newText);
    }
    else if(data2.length>=8)
    {
            
             if(data1.localeCompare(data2)==0)
            {
                const newElement=document.createElement('p');
                const newText=document.createTextNode("Your Password is Quite Weak!!!\n It should not be your name");
                oput.append(newElement);
                newElement.appendChild(newText);
            }
        else if(data3.localeCompare(data2)==0)
            {
                const newElement=document.createElement('p');
                const newText=document.createTextNode("Your Password is Quite Weak!!!\n It should not be your Date of Birth");
                oput.append(newElement);
                newElement.appendChild(newText);
            }
            else if(data4.localeCompare(data2)==0)
            {
                const newElement=document.createElement('p');
                const newText=document.createTextNode("Your Password is Quite Weak!!!\n It should not be your phone Number");
                oput.append(newElement);
                newElement.appendChild(newText);
            }
                 stop: for(let i=0;i<arr.length;i++)
            {
                for(let j=0;j<data2.length;j++)
                {
                    if(arr[i].localeCompare(data2[j])==0)
                    {
                        m=1;
                        break stop;             
                    }
                }
            }
            
            next:for(let i=0;i<arr.length;i++)
            {
                for(let j=0;j<data2.length;j++)
                {
                    if(arr[i].localeCompare(data2[j])==0)
                    {
                        m=1;
                        break next;
                    }
                }
            }
             
          else if(k==0 && m==0)
                {
                    const newElement=document.createElement('p');
                    const newText=document.createTextNode("Your Password is  Weak!!!\n It should be a combination of numbers and special characters");
                    oput.append(newElement);
                    newElement.appendChild(newText);

                }
                
            
                
            else{
                const newElement=document.createElement('p');
                const newText=document.createTextNode("Your Password holds good strength...Congrats");
                oput.append(newElement);
                newElement.appendChild(newText);

            }
    }   
}
