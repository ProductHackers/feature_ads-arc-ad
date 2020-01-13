# Arc Ads: A Core Component

This is a Core Component using
[ArcAds](https://github.com/washingtonpost/ArcAds).

### What does this Core Component give you?

The ArcAds Core Component can be used in any PageBuilder Fusion implementation.
It provides an interface for interacting with ArcAds and renders the ad. As long
as you have a few pieces of information (DFP id, slot names and targeting
values), you can get up and running very quickly.

### How do you use this Core Component?

Check out the Skeleton Repo to see a basic Fusion implementation of it. You may
need to alter targeting values, depending on business requirements.

### How can you fire it up locally?

To get started locally and see an ad, you'll need three things:

1. A DFP ID, usually a string of numbers.
1. A slot name, usually given to you by DFP, or findable by looking at an ad
   currently running on your site.
1. Some ad dimensions that tell DFP what creative to return.

Once you've cloned the repo:

1. Rename the mdx file so that it's parsable by
   docz`mv index.mdx.fixture index.mdx`

2. Change the dfp id and possibly the slotname within the mdx file.

```jsx
<ArcAd
   id="div-1"
   dfpId={/* ADD YOUR ID HERE */}
   slotName="something"
   dimensions={[[728,90], [800,250]]}
   ampLayout={{
     width: 300,
     height: 250,
     multiSize: "300x150,300x100,300x75,300x50"
   }}
 ></ArcAd>
```

Make sure the above reflects the correct dfp ID.

2. run `npm run docz:dev`
3. Visit localhost:3000 to see your ad appearing.

Can I use this in AMP?

Yes! Just pass in the `isAmp` prop to be `true`.
