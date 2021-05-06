var F = (function(){
    var formats = {
        "bold": {
            regexp: /\*([^\*]+)\*/g,
            format: function(m){
                m = m.slice(1, m.length-1)

                return "<strong>" + m + "</strong>";
            },
        },
        "italic": {
            regexp: /_([^_]+)_/g,
            format: function(m){
                m = m.slice(1, m.length-1)

                return "<em>" + m + "</em>";
            },
        },
        "underline": {
            regexp: /\^([^\^]+)\^/g,
            format: function(m){
                m = m.slice(1, m.length-1)

                return "<span style='text-decoration: underline;'>" + m + "</span>";
            },
        },
        "strikethrough": {
            regexp: /~([^~]+)~/g,
            format: function(m){
                m = m.slice(1, m.length-1)

                return "<span style='text-decoration: line-through;'>" + m + "</span>";
            },
        },

        "color": {
            regexp: /\[([^\{\}]+)\]\{([^\{\}]+)\}/g,
            format: function(m){
                var M = m.match(/\[([^\{\}]+)\]\{([^\{\}]+)\}/)

                return "<span style=\"color: " + M[2] + "\">" + M[1] + "</span>";
            },    
        },
        "link": {
            regexp: /\[([^\{\}]+)\]\(([^\(\)]+)\)/g,
            format: function(m){
                var M = m.match(/\[([^\{\}]+)\]\(([^\(\)]+)\)/)

                return "<a href=\"" + M[2] + "\">" + M[1] + "</a>";
            },    
        },
    };

    return {
        format: function(elem){
            var inside = elem.innerHTML.toString();

            var entries = Object.keys(formats);

            for(var i = 0; i<entries.length; i++){
                var cur = entries[i];

                inside = inside.replace(
                    formats[cur].regexp, 
                    formats[cur].format
                );
            }


            elem.innerHTML = inside;
        },
    };
})();
