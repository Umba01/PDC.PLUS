/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 * @author : Judith Umba
 */

    $(document).ready(function()
    {
        var passfield = document.getElementById('password_field_id');
        passfield.type = 'text';
    });

    function focusCheckDefaultValue(field, type, defaultValue)
    {
        if (field.value == defaultValue)
        {
            field.value = '';
        }
        if (type == 'pass')
        {
            field.type = 'password';
        }
    }
    function blurCheckDefaultValue(field, type, defaultValue)
    {
        if (field.value == '')
        {
            field.value = defaultValue;
        }
        if (type == 'pass')
        {
            if(field.value == defaultValue)
                field.type = 'text';
        }
        else if (type == 'pass')
        {
            if(field.value != defaultValue)
                field.type = 'password';
        }
    }
           
       
