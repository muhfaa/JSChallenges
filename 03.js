inama_barang = []
iquantity = []
iharga = []
ikode_barang = []



function addItem()	{

	ikode_barang.push(document.getElementById('kode_barang').value)
	inama_barang.push(document.getElementById('nama_barang').value)
	iquantity.push(parseInt(document.getElementById('quantity').value))
	iharga.push(parseInt(document.getElementById('harga').value))

	displayCart()

}

function displayCart()	{

	cartdata = '<table><tr><th>Kode Barang</th><th>Nama Barang</th><th>Harga</th><th>Total</th></tr>';
	total = 0;

	for(i=0; i<inama_barang.length; i++)	{
		total += iquantity[i] * iharga[i]
		cartdata += "<tr><td>" + ikode_barang + "</td><td>" + inama_barang[i] + "</td><td>" + iquantity[i] + "</td><td>" + iharga[i] + "</td><td>" + iquantity[i] * iharga[i] + "</td><td><buttononclick='delElement(" + i + ")'>Delete</button></td><tr>"
	}

	cartdata += '<tr><td></td><td></td><td></td><td>' + total + '</td></tr></table>'

	document.getElementById('cart').innerHTML = cartdata
}

function delElement(a)	{
	inama_barang.splice(a,1);
	iquantity.splice(a,1);
	iharga.splice(a,1);
	ikode_barang.splice(a,1);
	displayCart()
}
