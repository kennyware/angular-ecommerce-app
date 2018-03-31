module.exports.addTime = function(date, interval, units) {
	let newTime = new Date(date);
    const checkRollover = function() { if(newTime.getDate() != date.getDate()) newTime.setDate(0);};
    switch(interval) {
    	case 'minute': newTime.setTime(newTime.getTime() + (units * 1000 * 60)); break;
        case 'm': newTime.setTime(newTime.getTime() + (units * 1000 * 60)); break;
        case 'second': newTime.setTime(newTime.getTime() + (units * 1000)); break;
        case 's': newTime.setTime(newTime.getTime() + (units * 1000)); break;
        case 'millisecond': newTime.setTime(newTime.getTime() + units); break;
        case 'ms': newTime.setTime(newTime.getTime() + units); break;
        case 'h': newTime.setTime(newTime.getTime() + (units * 1000 * 60 * 60)); break;
        case 'hour': newTime.setTime(newTime.getTime() + (units * 1000 * 60 * 60)); break;
        case 'year': newTime.setFullYear(newTime.getFullYear() + units); checkRollover();  break;
        case 'y': newTime.setFullYear(newTime.getFullYear() + units); checkRollover();  break;
    	case 'month': newTime.setMonth(newTime.getMonth() + units); checkRollover();  break;
    	case 'week': newTime.setDate(newTime.getDate() + (units * 7));  break;
        case 'wk': newTime.setDate(newTime.getDate() + (units * 7));  break;
    	case 'day': newTime.setDate(newTime.getDate() + units);  break;
        case 'd': newTime.setDate(newTime.getDate() + units);  break;
        default: newTime = undefined; break;
    }
    
    return newTime;
}