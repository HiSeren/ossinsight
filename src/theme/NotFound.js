/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import {useHistory} from "@docusaurus/router";

function NotFound() {
  const history = useHistory()
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    const {pathname,search,hash} = window.location;
    // Only support redirect analyze/repo/name for now
    // TODO: see https://www.npmjs.com/package/path-to-regexp
    //       use plugin data to auto generate regexp list.
    if (!/^\/analyze\/[^\/?#]+\/[^\/?#]+\/?[?#]/.test(pathname)) {
      setDisplay(true)
      return
    }
    history.replace({pathname,search,hash})
  }, [])

  return (
    <Layout
      title={display ? translate({
        id: 'theme.NotFound.title',
        message: 'Page Not Found',
      }) : 'Redirecting...'}>
      {display ? renderNotFound() : renderRedirect()}
    </Layout>
  );
}

function renderRedirect () {
  return (
    <main className="container margin-vert--xl">
      <div className="row">
        <div className="col col--6 col--offset-3">
          <h1>Redirecting...</h1>
        </div>
      </div>
    </main>
  )
}

function renderNotFound () {
  return (
    <main className="container margin-vert--xl">
      <div className="row">
        <div className="col col--6 col--offset-3">
          <h1 className="hero__title">
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page">
              Page Not Found
            </Translate>
          </h1>
          <p>
            <Translate
              id="theme.NotFound.p1"
              description="The first paragraph of the 404 page">
              We could not find what you were looking for.
            </Translate>
          </p>
          <p>
            <Translate
              id="theme.NotFound.p2"
              description="The 2nd paragraph of the 404 page">
              Please contact the owner of the site that linked you to the
              original URL and let them know their link is broken.
            </Translate>
          </p>
        </div>
      </div>
    </main>
  )
}

export default NotFound;
