import { Image, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import './imgupload.css'
export default function(){
    const uploadButton = (
        <div>
          {'1' == '2' ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );
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
            <div className="ShowUpload">
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
                { '1'== '2' ? <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
            </div>
        </div>
    )
}