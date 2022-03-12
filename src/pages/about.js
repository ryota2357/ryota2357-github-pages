import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const Profile = ({ metaData }) => {
    const SocialIcon = ({ icon, id, color,  baseUrl }) => (
      <div style={{ marginRight: '10px' }}>
        <a href={`${baseUrl}${id}`} style={{ color: color }}  >
          <FontAwesomeIcon icon={icon} style={{
            width: '1.5rem', height: '1.5rem',
            color: color,
            verticalAlign: 'middle'
          }} />
          <span> { id }</span>
        </a>
      </div>
    )
    return (
      <div style={{ display: 'flex', margin: '30px 0' }}>
        <div style={{ width: '13.5rem', height: '13.5rem' }}>
          <StaticImage src="../images/profile-pic.jpg" alt="profile-pic" style={{
              position: 'relative',
              zIndex: '1',
              width: '100%',
              height: 'auto',
              borderRadius: '50%',
          }}/>
        </div>
        <div style={{ marginLeft: '10px' }}>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0' }}>
            { metaData.author.name }
          </p>
          <p dangerouslySetInnerHTML={{ __html: metaData.author.summary }} />
          <div style={{ marginTop: '2rem' }}>
            <SocialIcon icon={faTwitter} id={metaData.social.twitter}   color="#000000" baseUrl="https://twitter.com/" />
            <SocialIcon icon={faGithub}  id={metaData.social.github}    color="#000000" baseUrl="https://github.com/" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout location={location}>
      <Seo title="About" />
      <h1>About</h1>

      <Profile metaData={data.site.siteMetadata} />

      <h2 style={{ marginTop: '2rem' }}>このサイトについて</h2>
      <p>
        このサイトはReactベースのSSGである <a href="https://www.gatsbyjs.com">Gatsby</a> を用いて作成、ホスティングサービスにAzureを利用しています。<br />
        [<a href={`https://github.com/${data.site.siteMetadata.social.github}`}>GitHubリポジトリ</a>]
      </p>
      <p>
        <Link to="/blog">Blog</Link>では様々なテーマで好き勝手に書いています。<br />
        間違いに気がついた時は随時修正いますが、私の勘違いや見落としによって誤った情報がある可能性があります。<br />
        主に開発備忘録や参加記について書いています。
      </p>
      <p>
        僕が作成したゲームは<Link to="/gamedev">開発したゲームの一覧</Link>に載せています。<br />
        <a href="https://unityroom.com/">unityroom</a>にて公開しています。
      </p>

      <h2 style={{ marginTop: '2rem' }}>問い合わせ/修正依頼</h2>
      <p>私のtwitterのDMにてご連絡ください。</p>
      <p>また、修正依頼についてはGithubにPRでも可能です。(<a href={`https://github.com/${data.site.siteMetadata.social.github}`}>Githubリポジトリ</a>)</p>

      <h2>リンク集</h2>
      <p>- <a href={`https://atcoder.jp/users/${data.site.siteMetadata.social.atcoder}`}>     atcoder          </a></p>
      <p>- <a href={`https://github.com/${data.site.siteMetadata.social.github}`}>            github           </a></p>
      <p>- <a href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}>          twitter(メイン垢)</a></p>
      <p>- <a href={`https://twitter.com/${data.site.siteMetadata.social.twitter}_log`}>      twitter(サブ?垢) </a></p>
      <p>- <a href={`https://unityroom.com/users/${data.site.siteMetadata.social.unityroom}`}>unityroom        </a></p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query QueryForAboutPage {
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
        description
        siteUrl
        repository
        social {
          github
          unityroom
          twitter
          atcoder
        }
      }
    }
  }
`

export default About