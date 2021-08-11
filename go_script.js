
//if (knowBrow() != "IE")
document.addEventListener("keydown", 
function(event)
{
    if (event.target.tagName.toLowerCase() != 'body')return;
    
    if (event.ctrlKey == true && (event.key == 'c' || event.key == 'C'))
        copyValues();
    
    if (event.ctrlKey == true && (event.key == 'v' || event.key == 'V'))
        pasteValues();
}
);

function copyValues()
{
    console.log("copy");
    if (window.getSelection().toString())
        document.execCommand("copy")/*, console.log(window.getSelection().toString())*/;
    else
        alert("Can`t see any selected values ... Are you sure, there is selection on this page ??? ");
}

function pasteValues()
{
    console.log("paste");
    
//    var string_val = document.execCommand("paste");
    
    var textarea = 
    document.createElement("textarea");
    textarea.id = 'unique_id_C2A5E80F00E653CE9EE00EFF42B475C0';
    textarea.style = 'position: absolute; margin-left: -100%';
    
    document.body.appendChild(textarea);
    document.getElementById('unique_id_C2A5E80F00E653CE9EE00EFF42B475C0').focus();
    document.execCommand("paste");
    
    window.setTimeout(pasteValues_part2, 1000);
}

function pasteValues_part2()
{
//    console.log("part2");
    
    var textarea = document.getElementById('unique_id_C2A5E80F00E653CE9EE00EFF42B475C0');
    var valueFromArea = textarea.value;
//    console.log(valueFromArea);
    textarea.remove();
    if (valueFromArea === '')return;
    
    var array_val = valueFromArea.split("\n");
//    console.log(array_val);
    var arr_key = [];
    var arr_val = [];
//    console.log(compare_key_id);
    check_special(array_val);
    
    while (array_val.length > 0)
    {
        var tmp_str = array_val.shift();
//        console.log(tmp_str);
//        console.log((tmp_str.match(/[0-9]{5,}/g) || []).toString().replace(/,/g, ""));
        if (tmp_str == "" || tmp_str.lastIndexOf(delimeter) < 0)continue;
        
        var part1 = tmp_str.slice(0, tmp_str.lastIndexOf(delimeter)).replace(delimeter, "").trim();
        var part2 = tmp_str.slice(tmp_str.lastIndexOf(delimeter), tmp_str.length).replace(delimeter, "").trim();
        if (part1 && part2)
        {
            arr_key.push(part1);
            arr_val.push(part2);
        }
    }
    console.log(arr_key);//leave in production version?
//    console.log(Object.keys(compare_key_id));
//    console.log(arr_val);
    var allInputs = document.querySelectorAll("input");
    allInputs.forEach
    (
        function(val)
        {
            console.log(val.name + " <<< [name]       " + val.id + " <<< [id]");
        }
    );//leave in production version
    
    arr_key.forEach
    (
        function(name_near_input_copy, index, arr)
        {
            var limitOf = Object.keys(compare_key_id).length;
            var object_keys = Object.keys(compare_key_id);
            
            for (var i = 0; i < limitOf; i ++)
            {
//                console.log("start_loop1");
                var key_in_sett_arr = String(object_keys[i]);
//                if (key_in_sett_arr != 'Ulice')continue;
//                console.log(key_in_sett_arr, key_in_sett_arr.length);
                
                var insert_in_this_input = compare_key_id[key_in_sett_arr];
                var insert_this_value = arr_val[index];
//                console.log(key_in_sett_arr + " ___ " + name_near_input_copy + " __ " + insert_this_value);
                
                if (parseKeyChangeValue(key_in_sett_arr) == name_near_input_copy || 
                        key_in_sett_arr.toLowerCase() === name_near_input_copy.toLowerCase())
                {
//                    console.log("start_loop2");
//                    console.log(insert_in_this_input, name_near_input_copy, insert_this_value);
                    var input_item = getInput(insert_in_this_input);
                    if (!input_item)continue;
//                    var input_item = actual_input.item(0);

                    insert_this_value = parseKeyChangeValue(key_in_sett_arr, insert_this_value);
                    insert_this_value = apply_filters(name_near_input_copy, insert_this_value);
//                    console.log(input_item);
                    input_item.value = insert_this_value;
                    input_item.setAttribute("value", insert_this_value);
                }
            }
        }
    )
    
    window.scrollTo(0, 0);
}

function check_special(copyData)
{
    if (!copyData || !Array.isArray(copyData))return;
    var keysInArr = Object.keys(compare_key_id);
    
//    console.log(copyData, keysInArr);
//    console.log(keysInArr.includes("_cislo_popisne_id"), keysInArr.includes("_cislo_popisne_source"));
    
    var number_parser = keysInArr.filter(
            function(elem)
                {
                    if (elem[0] != "_")return false;
                    if (elem == "_cislo_popisne_id" || elem == "_cislo_popisne_source")return false;
                    if (String(elem).toLowerCase().lastIndexOf(String.fromCharCode(269) + ".") < 0)return false;
                    
                    return true;
                }
            );
    
   
    for (var i = 0; i < number_parser.length; i ++)
    {
        var key = number_parser[i].replace("_", "");
//        console.log(key, i);
//        var val = copyData.join("_").substr(String.indexOf(key)).substring(0, String.indexOf("_"));
//        console.log(val);
        var arr_in_str = copyData.join("_");
        var copy_data_val_complete = (arr_in_str || "_").substr(arr_in_str.toLowerCase().indexOf(key.toLowerCase()));
//        console.log(copy_data_val_complete, copy_data_val_complete.indexOf("_"));
        var copy_data_val_complete = copy_data_val_complete.substr(0, copy_data_val_complete.indexOf("_"));
//        console.log(copy_data_val_complete);
        if (!copy_data_val_complete)continue;
//        console.log(copy_data_val_complete);
        
        copy_data_val_complete += " ";
        var objednavka_c = (copy_data_val_complete.match(/[\s|\.][0-9]{1,}\s+/g) || [])
                .toString().replace(/,/g, "");
//        console.log(parseInt(objednavka_c));
        objednavka_c = parseInt(objednavka_c.replace(".", "").trim());
        if (!parseInt(objednavka_c))continue;
        
//        console.log(copyData);
        if (objednavka_c)
            copyData.push("_" + key + ":" + " " + String(objednavka_c));
//        console.log(copyData);
    }
    
    
    var cislo_popisne_starter = keysInArr.includes("_cislo_popisne_source") && 
            Boolean(compare_key_id["_cislo_popisne_source"]);
    if (!cislo_popisne_starter)return;
    var cislo_source = compare_key_id["_cislo_popisne_source"];
    
//    console.log(cislo_source);
    var reg = new RegExp(cislo_source + "\s?:", "i");
    
    for (var i = 0; i < copyData.length; i ++)
    {
        var val = copyData[i];
        if (reg.test(val))
        {
            cislo_source = val;
            break;
        }
//        console.log(val, reg.test(val));
    }
    
    if (cislo_source == compare_key_id["_cislo_popisne_source"])return;
    cislo_source += " ";
//    console.log(compare_key_id.hasOwnProperty("_cislo_popisne_id"), 
//    compare_key_id.hasOwnProperty("_cislo_popisne_source"));
    
    var cisloPopisne = (cislo_source.match(/\s?[0-9|//|\\]{1,}\s+/g) || []).toString().replace(/,/g, "").trim();
    if (!cisloPopisne)return;
    cislo_source = cislo_source.trim();
    
    var cislo_popisne_id_all = keysInArr.filter(
            function(elem)
                {
                    if (String(elem).toLowerCase() == "_cislo_popisne_id")
                        return true;
                }
            );
//    console.log(cislo_popisne_id_all);
    
    var input_exist = false;
    cislo_popisne_id_all.forEach
    (
        function(key)
        {
//            console.log(key, compare_key_id[key], getInput(compare_key_id[key]));
            copyData.push(key + ":" + String(cisloPopisne));
            if (getInput(compare_key_id[key]))
                input_exist = true;
        }
    );
    
    if (input_exist)
    {
        var index = copyData.indexOf(cislo_source);
        if (index < 0)return;
//        console.log(cislo_source, cisloPopisne, index);
        if (cislo_source.indexOf(" " + cisloPopisne + " ") >= 0)
            cislo_source = cislo_source.replace(" " + cisloPopisne + " ", " ").trim();
        else
            cislo_source = cislo_source.replace(cisloPopisne, " ").trim();
//        console.log(cislo_source, cislo_source.indexOf(" " + cisloPopisne + " ") >= 0, cisloPopisne.length);
//        console.log(cislo_source.replace(cisloPopisne, " "));
        copyData[index] = cislo_source;
    }
    
}

function apply_filters(key, val)
{
    var psc = "ps" + String.fromCharCode(269);
    if (key.search(/cena/i) > -1 || key.toLowerCase().search(psc) > -1)
    {
//        console.log(val.match(/[0-9]/g) || [].toString().replace(/,/g, ""), key, val, psc);
        return (val.match(/[0-9]/g) || []).toString().replace(/,/g, "");
    }
//    console.log(key, val);
    
    return val;
}

function getInput(name)
{
    var res = document.querySelectorAll("input[id='"+name+"']");
    if (res && res.item(0))return thisInputOk(res.item(0));
    var htmlTeg = document.querySelectorAll("[id='"+name+"']");
    if (!htmlTeg || !htmlTeg.item(0))return null;
//    console.log(htmlTeg.item(0));
    var inputs = document.querySelectorAll("#"+name+" input");
    
    
    var inputsOk = [];
    for (let i = 0; i < inputs.length; i ++)
    {
        if (thisInputOk(inputs.item(i)))
            inputsOk.push(inputs.item(i));
//        console.log(inputsOk);
    }
    res = inputsOk.shift();
    
    return res;
}

function thisInputOk(elem)
{
    if (elem.getAttribute("disabled") === "" || elem.getAttribute("disabled") === "disabled" || 
    elem.getAttribute("visibility") === "hidden" || elem.getAttribute("display") === "none")return false;
    
    var it = elem.getAttribute("type"); //input type
    if (it === 'image' || it === 'radio' || it === 'reset' || it === 'submit' || 
    it === 'button' || it === 'checkbox' || it === 'color' || it === 'hidden')return false;//file ?
    
    return elem;
}

function parseKeyChangeValue(key, value)
{
    var res = "";
    var dataArr = key.split("_");
//    console.log(dataArr);
    if (value === undefined)
        return dataArr[0];
    
    if (dataArr.length <= 2)
        return value;
    
//    console.log(dataArr);
    var indexOfPart = dataArr.indexOf("part");
    if (indexOfPart < 0 || indexOfPart + 1 == dataArr.length)
        return value;
    
    var getPartNumber = parseInt(dataArr[indexOfPart + 1]);
    if (getPartNumber < 0)
        return value;
    
//    console.log(getPartNumber);
    var dataArr = value.split(" ");
//    console.log(dataArr);
    if (dataArr.length < getPartNumber)
        return value;
    
    res = dataArr[getPartNumber - 1];
    
    return res;
}



/*
function knowBrow()
{
    var browserName = "unknown", usAg = navigator.userAgent;
    
    if (usAg.indexOf("Opera") > -1 || usAg.indexOf("OPR") > -1)
    {
        browserName = "Opera";
        return;
    }
    
    if (usAg.indexOf("MSIE") > -1 || usAg.indexOf(".NET") > -1)
    {
        browserName = "IE";
        return;
    }
    
    if (usAg.indexOf("Firefox") > -1)
    {
        browserName = "Firefox";
        return;
    }
        
    if (usAg.indexOf("Chrome") > -1)
    {
        browserName = "Chrome";
        return;
    }
    
    if (usAg.indexOf("Safari") > -1)
    {
        browserName = "Safari";
        return;
    }
    
    return browserName;
};

*/