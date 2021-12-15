// const mouse = document.querySelector('.mouse')
const smallMouse = document.querySelector('.smallMouse')


window.addEventListener('mousemove', (e) => {

    // mouse.style.left = e.pageX + 'px'
    // mouse.style.top = e.pageY + 'px'

    smallMouse.style.left = e.pageX + 'px'
    smallMouse.style.top = e.pageY + 'px'

})


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();


class WEBGL {

    static isWebGLAvailable() {

        try {

            const canvas = document.createElement('canvas');
            return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));

        } catch (e) {

            return false;

        }

    }

    static isWebGL2Available() {

        try {

            const canvas = document.createElement('canvas');
            return !!(window.WebGL2RenderingContext && canvas.getContext('webgl2'));

        } catch (e) {

            return false;

        }

    }

    static getWebGLErrorMessage() {

        return this.getErrorMessage(1);

    }

    static getWebGL2ErrorMessage() {

        return this.getErrorMessage(2);

    }

    static getErrorMessage(version) {

        const names = {
            1: 'WebGL',
            2: 'WebGL 2'
        };

        const contexts = {
            1: window.WebGLRenderingContext,
            2: window.WebGL2RenderingContext
        };

        let message = 'Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';

        const element = document.createElement('div');
        element.id = 'webglmessage';
        element.style.fontFamily = 'monospace';
        element.style.fontSize = '13px';
        element.style.fontWeight = 'normal';
        element.style.textAlign = 'center';
        element.style.background = '#fff';
        element.style.color = '#000';
        element.style.padding = '1.5em';
        element.style.width = '400px';
        element.style.margin = '5em auto 0';

        if (contexts[version]) {

            message = message.replace('$0', 'graphics card');

        } else {

            message = message.replace('$0', 'browser');

        }

        message = message.replace('$1', names[version]);

        element.innerHTML = message;

        return element;

    }

}

export { WEBGL };

if (WEBGL.isWebGLAvailable()) {

    // Initiate function or other initializations here
    animate();

} else {

    const warning = WEBGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);

}





