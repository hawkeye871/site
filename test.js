/**
 * Created by Kisya on 26.09.2016.
 */
<head>
<script type="text/javascript">
function go() {
    return ":P"
}

function withDefaults(a, b = 5, c = b, d = go(), e = this,
                      f = arguments, g = 5) {
    return [a,b,c,d,e,f,g];
}
function withoutDefaults(a, b, c, d, e, f, g){
    switch(arguments.length){
        case 0:
            a
        case 1:
            b = 5
        case 2:
            c = b
        case 3:
            d = go();
        case 4:
            e = this
        case 5:
            f = arguments
        case 6:
            g = this.value;
        default:
    }
    return [a,b,c,d,e,f,g];
}

withDefaults.call({value:"=^_^="});
// [undefined, 5, 5, ":P", window, arguments, "=^_^="]


console.log(withoutDefaults.call({value:"=^_^="}));
// [undefined, 5, 5, ":P", window, arguments, "=^_^="]
</script>
    </head>