radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
    } else if (2 == receivedNumber) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinRight)
    } else if (3 == receivedNumber) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinLeft)
    } else if (4 == receivedNumber) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
    } else if (5 == receivedNumber) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Right)
    } else if (6 == receivedNumber) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Left)
    } else if (0 == receivedNumber) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
})
radio.setGroup(120)
basic.forever(function () {
	
})
