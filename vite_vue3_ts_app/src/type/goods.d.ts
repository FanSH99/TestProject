interface GoodsData {
    query: string,
    pagenum: number,
    pagesize: number,
}

type AttrType = string | undefined

interface AttrData {
    sel: AttrType
}

interface AddGoodsData {
    goods_name: string,
    goods_cat: string,
    goods_price: string,
    goods_number: string,
    goods_weight: string,
    goods_introduce?: string,
    pics?: Array<any>,
    attrs?: Array<any>

}
interface Attrs {
    attr_id: number,
    attr_value: string
}


interface ParamsData {
    attr_name: string,
    attr_sel: string,
    attr_vals?: string,
}

interface CatesData {
    type?: Array,
    pagenum: number,
    pagesize: number,
}
