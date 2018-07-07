Page({
    onReady: function () {
        this.position = {
            x: 150,
            y: 300,
            vx: 2,
            vy: 2,
            s: 2
        }

        this.drawBall()
        this.interval = setInterval(this.drawBall, 10)
    },
    drawBall: function () {
        var p = this.position
        p.x += p.vx
        p.y += p.vy
        if (p.x >= 300) {
            p.vx = -2
        }
        if (p.x <= 7) {
            p.vx = 2
        }
        if (p.y >= 300) {
            p.vy = -2
        }
        if (p.y <= 7) {
            p.vy = 2
        }
        p.s += p.vx
        var context = wx.createContext()

        function ball(x, y) {
            context.beginPath(0)
            context.rect(x, y, 300, 300)

            if (y < 100) {
                context.setFillStyle('#1aad19')
            } else if (y > 200) {
                context.setFillStyle('#FF0000')
            } else if (y > 100) {
                context.setFillStyle('#0000FF')
            }
            context.setStrokeStyle('rgba(1,1,1,0)')
            context.fill()
            context.stroke()
        }

        ball(0, p.y)
        wx.drawCanvas({
            canvasId: 'canvas',
            actions: context.getActions()
        })
    },
    onUnload: function () {
        clearInterval(this.interval)
    }
})
