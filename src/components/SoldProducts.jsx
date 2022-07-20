import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IKImage } from 'imagekitio-react'
import { useNavigate } from 'react-router-dom'
import { fetchTrans, fetchTransId } from '../redux/actions/bidAction'
const urlImg = 'https://ik.imagekit.io/jmprup9kb'

function SoldProduct() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { transaction } = useSelector((state) => state.bid)
  const { user, errorU } = useSelector((state) => state.users)
  const [trans, setTrans] = useState('')
  useEffect(() => {
    if (transaction != undefined) {
      let tempTrans = transaction.transaction
      let filterTemp = tempTrans?.filter(function (bid) {
        return bid.iduser_seller == user?.id && bid.status_pembelian == true
      })
      setTrans(filterTemp)
    }
  }, [transaction])

  useEffect(() => {
    dispatch(fetchTrans())
  }, [dispatch])

  return (
    <>
      {trans == '' || trans == undefined ? (
        <div className="grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-1 min-h-[8rem] mb-2">
          <div className="flex flex-col w-full  bg-neutral-1 shadow-low rounded-md py-3 px-2 gap-2 border border-neutral-2  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-2">
            <p className="text-center mx-5">Belum Ada Product</p>
          </div>
        </div>
      ) : (
        // edit disini to navigate ke ProductPageEdit
        trans?.map((produkList) => (
          <div className="grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-1 min-h-[8rem] mb-2">
            <div
              className="flex flex-col w-48 bg-neutral-1 shadow-low rounded-md py-3 px-2 gap-2 border border-neutral-2  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-2"
              key={produkList.id}
            >
              <div className="h-1/2">
                {/* <img src={daftarJual} className="w-full h-full block rounded-[4px] justify-center items-center" alt="..." /> */}
                <IKImage
                  className="w-full h-full block rounded-[4px] justify-center items-center"
                  urlEndpoint={urlImg}
                  path={produkList?.gambarProduk?.filePath}
                />
              </div>
              <div className="h-1/2 mt-2">
                <p className="font-bold">{produkList?.barang.nama}</p>
                <p>Pembeli: {produkList?.user?.nama}</p>
                <p className="mt-3">{produkList.nama}</p>
                <p>Terjual</p>
                <p>Rp.{produkList.harga_tawar}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  )
}
export default SoldProduct
