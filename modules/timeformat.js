process.stdin.setEncoding('utf-8');

function timeFormat(time) {
    var seconds = Math.floor((time % 3600) % 60);
    var minutes = Math.floor((time % 3600) / 60);
    var hours = Math.floor(time / 3600);

    if (time <= 59) {
        return `${seconds} sek.`;

    } else if (time <= 60) {
          return `${minutes} min.`;

    } else if (time < 3600) {
        return `${minutes} min. ${seconds} sek.`;

    } else {
        return `${hours} godz. ${minutes} min. ${seconds} sek.`;
    }
}

exports.print = timeFormat;
