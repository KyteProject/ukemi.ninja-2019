<Row>
	{/* <Jumbotron className="p-2 p-md-5 rounded blog-banner">
  <Col md={6} className="px-0 content">
    <h1 className="display-4">
      <Link to={`/blog/${bannerPost.slug}`}>{bannerPost.title}</Link>
    </h1>
    <p className="lead my-y">{bannerPost.excerpt}</p>
    <Button
      variant="outline"
      href={`/blog/${bannerPost.slug}`}
      className="banner-button"
    >
      Read More
    </Button>
  </Col>
</Jumbotron> */}
	<Col lg={9}>
		<main>
			<Row>
				<Col clg={12}>
					<article className="blog-banner">
						<div className="thumb">
							<figure className="thumb-wrap">
								<Link to={`/blog/${bannerPost.slug}`}>
									<Image rounded src={bannerPost.feature_image} alt={bannerPost.title} />
								</Link>
							</figure>
						</div>
						<div className="content-wrap">
							<div>
								<h3>
									<Link to={`/blog/${bannerPost.slug}`}>{bannerPost.title}</Link>
								</h3>
							</div>
						</div>
					</article>
				</Col>
			</Row>
		</main>
	</Col>
</Row>;
