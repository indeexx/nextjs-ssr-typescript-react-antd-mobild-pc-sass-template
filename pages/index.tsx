import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import stylesPc from '../styles/pc.module.scss'
import { Button, Steps, Avatar, List, Space } from 'antd-mobile';

import {
  CheckCircleFill,
  ClockCircleFill,
  HandPayCircleOutline,
} from 'antd-mobile-icons';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter()

  const handleAvatar = () => {
    router.push({ pathname: 'about', query: { id: 666, name: "indeex" } })
  }

  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="indeex" />
        <meta name="description" content="indeex" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="all" />
        <meta name="author" content="indeex@qq.com" />
        <meta name="copyright" content="" />
        <meta property="image" content="https://blog.indeex.club/wp-content/uploads/2020/06/cropped-author%E7%99%BD%E5%BA%95-1-32x32.png" />
        <meta itemProp="image" content="https://blog.indeex.club/wp-content/uploads/2020/06/cropped-author%E7%99%BD%E5%BA%95-1-32x32.png" />
        <meta name="description" itemProp="description" content="indeex" />
        <meta property="og:type" content="indeex" />
        <meta property="og:title" content="indeex" />
        <meta property="og:description" content="indeex" />
        <meta property="og:image" content="https://blog.indeex.club/wp-content/uploads/2020/06/cropped-author%E7%99%BD%E5%BA%95-1-32x32.png" />
        <meta property="og:url" content="" />
        <meta property="og:videosrc" content="" />
        <meta property="og:width" content="300" />
        <meta property="og:height" content="600" />
        <meta name="renderer" content="webkit" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="screen-orientation" content="portrait" />
        <meta name="full-screen" content="true" />
        <meta name="x5-fullscreen" content="true" />
        <meta name="x5-orientation" content="portrait" />
        <meta name="360-fullscreen" content="true" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta httpEquiv="Cache-Control" content="no-siteapp" />
        <link rel="icon" href="https://blog.indeex.club/wp-content/uploads/2020/06/cropped-author%E7%99%BD%E5%BA%95-1-32x32.png" />
        <title>
          ssr-ts mobile&&PC with indeex
        </title>
      </Head>
      <div className={styles.lalala}>?????????</div>
      <div className={styles.rect}></div>

      <div className={'pc ' + stylesPc.pcContainer}>PC?????????</div>

      <Button onClick={handleAvatar}>?????????????????????</Button>

      <Avatar src="" style={{ '--size': '54px', borderRadius: '30px' }} />
      <List header="????????????">
        <List.Item extra="?????????" clickable>
          ???????????????
        </List.Item>
        <List.Item description="?????????????????????????????????" clickable>
          ????????????
        </List.Item>
        <List.Item title="???????????????">??????????????????</List.Item>
      </List>
      <Steps
        direction="vertical"
        current={1}
        style={{
          '--title-font-size': '17px',
          '--description-font-size': '15px',
          '--indicator-margin-right': '12px',
          '--icon-size': '22px',
        }}
      >
        <Steps.Step
          title="??????????????????"
          description="?????????????????????"
          icon={<CheckCircleFill />}
        />
        <Steps.Step
          title="????????????"
          description={
            <Space block direction="vertical">
              <div>?????????????????????</div>
              <Button color="primary">?????????</Button>
            </Space>
          }
          icon={<ClockCircleFill />}
        />
        <Steps.Step
          title="???????????????"
          description="?????????????????????"
          icon={<HandPayCircleOutline />}
        />
      </Steps>
    </div>
  )
}

export default Home
