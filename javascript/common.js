let $ = function(id)
    {
        let temp = document.getElementById(id);
        return temp;
    }
    function log(...messages)
    {
      console.log(messages);
    }
    function val(id)
    {
        return $(id).value
    }