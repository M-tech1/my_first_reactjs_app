
function my_spaceship(param) {

    let direction = 0
    let x = 0
    let y = 0
    let index = 0
    let item

    while (index < param.length) {
        item = param[index];
        index++;

        if (item == 'R') {
            direction++;
        }

        if (item == 'L') {
            direction--;
        }


        if (item == 'A') {
            if (cord(direction) == 'right') {
                x++;
            }
            if (cord(direction) == 'left') {
                x--;
            }

            if (cord(direction) == 'up') {
                y++;
            }
            if (cord(direction) == 'down') {
                y--;
            }
        }
    }
    return "{x: " + x + ", y: " + y * -1 + ", direction: " + "'" + cord(direction) + "'}"
}


function cord(drt) {
    if (drt == 0 || drt % 4 == 0) {
        return 'up'
    }

    if (drt == 1 || (drt - 1) % 4 == 0) {
        return 'right'
    }

    if (drt == 2 || (drt - 2) % 4 == 0) {
        return 'down'
    }

    if (drt == 3 || (drt - 3) % 4 == 0) {
        return 'left'
    }


    // this part of the code function for negative direction
    if (drt == -1 || (drt + 1) % 4 == 0) {
        return 'left'
    }
    if (drt == -2 || (drt + 2) % 4 == 0) {
        return 'down'
    }
    if (drt == -3 || (drt + 3) % 4 == 0) {
        return 'right'
    }

}