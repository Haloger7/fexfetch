const os = require('os');
const humanize = require("humanize-duration")

async function fetch() {
    const colors = {
        black: "\x1b[30m",
        light_black: "\x1B[90m",
        blue: "\x1b[34m",
        light_blue: "\x1B[94m",
        cyan: "\x1b[36m",
        light_cyan: "\x1B[96m",
        green: "\x1b[32m",
        light_green: "\x1B[92m",
        magenta: "\x1b[35m",
        light_magenta: "\x1B[95m",
        red: "\x1b[31m",
        light_red: "\x1B[31m",
        white: "\x1b[37m",
        yellow: "\x1b[33m",
        light_yellow: "\x1B[93m"
    }
    console.log(`    ${colors.black}H${colors.light_black}N ${colors.white}| ${colors.black}HOSTNAME: ${colors.white}${os.hostname() || "N/A"}\n
    ${colors.blue}O${colors.light_blue}S ${colors.white}| ${colors.blue}OS: ${colors.white}${os.version() || "N/A"}\n
    ${colors.cyan}K${colors.light_cyan}N ${colors.white}| ${colors.cyan}KERNEL: ${colors.white}${os.type() || "N/A"}\n
    ${colors.green}A${colors.light_green}H ${colors.white}| ${colors.green}ARCH: ${colors.white}${os.arch() || "N/A"}\n
    ${colors.magenta}U${colors.light_magenta}P ${colors.white}| ${colors.magenta}UPTIME: ${colors.white}${humanize(os.uptime() * 1000, {
        round: true
    }) || "N/A"}\n
    ${colors.red}S${colors.light_red}H ${colors.white}| ${colors.red}SHELL: ${colors.white}${os.userInfo().shell || "N/A"}`)
}

fetch();