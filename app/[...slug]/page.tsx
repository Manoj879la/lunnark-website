import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const products=[
{name:"Cosmic Dome",family:"Fabricated",type:"Decorative / Technical",image:"https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png",path:"/product_info/products/all/Fabricated/Cosmic-Dome"},
{name:"Echodisk",family:"Acoustic",type:"Acoustic / Pendant",image:"https://www.lunnark.com/assets/images/home/new-products/AO19_Acous_Disk.png",path:"/product_info/products/all/Acoustic/Echodisk"},
{name:"Bubble",family:"Fabricated",type:"Fabricated / Floor",image:"https://www.lunnark.com/assets/images/home/new-products/DS-64-Bubble.png",path:"/product_info/products/all/Fabricated/Bubble"},
{name:"Conio",family:"Acoustic",type:"Acoustic / Suspended",image:"https://www.lunnark.com/assets/images/home/new-products/AO10_Acous_K.png",path:"/product_info/products/all/Acoustic/Conio"},
{name:"Band",family:"Acrylic",type:"Decorative",image:"https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png",path:"/product_info/products/all/Acrylic/Band"},
{name:"Faber",family:"Fabric",type:"Decorative",image:"https://www.lunnark.com/assets/images/home/new-products/AO19_Acous_Disk.png",path:"/product_info/products/all/Fabric/Faber"},
{name:"Slide",family:"Wood",type:"Decorative",image:"https://www.lunnark.com/assets/images/home/new-products/AO10_Acous_K.png",path:"/product_info/products/all/Wood/Slide"},
{name:"Gear",family:"Fabricated",type:"Decorative",image:"https://www.lunnark.com/assets/images/home/new-products/DS-64-Bubble.png",path:"/product_info/products/all/Fabricated/Gear"},
{name:"Spino",family:"Spinned",type:"Decorative",image:"https://www.lunnark.com/assets/images/home/new-products/AO10_Acous_K.png",path:"/product_info/products/all/Spinned/Spino"},
{name:"Hazo",family:"Wood",type:"Decorative",image:"https://www.lunnark.com/assets/images/home/new-products/AO19_Acous_Disk.png",path:"/product_info/products/all/Wood/Hazo"},
{name:"Torc",family:"Wood",type:"Decorative",image:"https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png",path:"/product_info/products/all/Wood/Torc"},
{name:"W",family:"Linear",type:"Functional",image:"https://www.lunnark.com/assets/images/home/new-products/AO10_Acous_K.png",path:"/product_info/products/all/Linear/W"},
{name:"Luma Line",family:"Magnetic Track Lights",type:"Functional",image:"https://www.lunnark.com/assets/images/home/new-products/AO19_Acous_Disk.png",path:"/product_info/products/all/Magnetic_Track_Lights/Luma-Line"},
{name:"Axis-Cyl",family:"Magnetic Track Lights",type:"Functional",image:"https://www.lunnark.com/assets/images/home/new-products/DS-64-Bubble.png",path:"/product_info/products/all/Magnetic_Track_Lights/Axis-Cyl"}
];

function Layout({title,children}:{title:string,children:React.ReactNode}){return <><SiteHeader/><main className="inner-page"><div className="inner-hero"><span>LUNNARK</span><h1>{title}</h1></div>{children}</main><SiteFooter/></>}
function Card({p}:{p:any}){return <a className="inner-product-card" href={p.path}><div className="inner-product-image"><img src={p.image} alt={p.name}/></div><small>{p.type}</small><h3>{p.name}</h3><span>View More →</span></a>}
function Products({cat="All Products"}){const list=cat==="All Products"?products:products.filter(p=>(p.type+" "+p.family).toLowerCase().includes(cat.toLowerCase()));return <Layout title={cat}><section className="content-section"><form className="site-search" action="/search"><input name="q" placeholder="Search Here for......"/><button>Search</button></form><div className="filter-tabs"><a href="/all">All</a><a href="/all/decorative">Decorative</a><a href="/all/functional">Functional</a><a href="/all/kinetic">Kinetic</a><a href="/all/mounting">Mounting</a></div><div className="inner-product-grid">{(list.length?list:products).map(p=><Card p={p} key={p.name}/>)}</div></section></Layout>}
function Product({p}:{p:any}){return <Layout title={p.name}><section className="product-detail"><div className="product-detail-image"><img src={p.image} alt={p.name}/></div><div className="product-detail-copy"><small>{p.family} / {p.type}</small><h2>{p.name}</h2><p>LunnArk luminaire designed for high-quality architectural lighting applications.</p><h3>Technical Specification</h3><div className="spec-grid">{[["Luminous Efficacy","Up to 95 Lm/W"],["Color Temperature","2700K / 3000K / 4000K / 5700K"],["CRI","≥80 Standard / ≥90 Optional"],["UGR","< 19"],["LED Life","> 50,000 hours"],["Control","Switch / DALI / Analog"]].map(x=><div key={x[0]}><b>{x[0]}</b><span>{x[1]}</span></div>)}</div><a className="primary-btn" href="/contact_us">Enquire About This Product →</a></div></section></Layout>}

export default async function Page({params,searchParams}:{params:Promise<{slug?:string[]}>,searchParams:Promise<{q?:string}>}) {
const {slug=[]}=await params; const sp=await searchParams; const path="/"+slug.join("/");
if(path==="/all") return <Products/>; if(path==="/all/decorative") return <Products cat="Decorative"/>; if(path==="/all/functional") return <Products cat="Functional"/>; if(path==="/all/kinetic") return <Products cat="Kinetic"/>; if(path==="/all/mounting") return <Products cat="Mounting"/>;
if(path.startsWith("/product_info/products/")){const name=(slug.at(-1)||"").replace(/-/g," ").toLowerCase();return <Product p={products.find(x=>x.name.toLowerCase()===name)||products[0]}/>;}
if(path==="/search"){const q=sp.q||"";const found=products.filter(p=>(p.name+" "+p.family+" "+p.type).toLowerCase().includes(q.toLowerCase()));return <Layout title={"Search"+(q?" — "+q:"")}><section className="content-section"><form className="site-search" action="/search"><input name="q" defaultValue={q} placeholder="Search Here for......"/><button>Search</button></form><div className="inner-product-grid">{found.map(p=><Card p={p} key={p.name}/>)}</div></section></Layout>;}
return <Layout title="LunnArk"><section className="content-section"><h2>Page</h2><p>This LunnArk section is being migrated locally.</p></section></Layout>;
}