import { Image } from 'antd';
import './img.css'
export default function(){
	return (
        <div className="Box">
            <div className="ShowImg">
                <div className="ImgBox">
                    <Image
                    width={100}
                    height={96}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </div>
            </div>
        </div>
    )
}