import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FBB039',
    textAlign: 'center',
  },
  pizzaName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FBB039',
    marginBottom: 5,
  },
  pizzaLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 6,
  },
  cart: {
    marginBottom: 50,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    color: '#FFF',
  },
  pizzaImage: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  pizzaDetails: {
    width: '50%',
    justifyContent: 'space-around',
  },
  cartItemQtArea: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    height: 30,
  },
  cartItemQtButton: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    fontSize: 17,
    outline: 'none',
    padding: 0,
    paddingHorizontal: 10,
    color: '#FFF',
  },
  cartItemQt: {
    lineHeight: 30,
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    color: '#FFF',
  },
  cartTotalItem: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#FBB039',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 15,
  },
  cartTotalItemText: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  cartTotalItemValue: {
    color: '#FFF',
  },
  cartTotalItemBig: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
  cartFinalizar: {
    width: '100%',
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: '#FBB039',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pizzaInfoQtArea: {
    flexDirection: 'row',
    width: 100,
    height: 50,
    backgroundColor: '#EEE',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  pizzaInfoQtButton: {
    padding: 15,
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  pizzaInfoQt: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    color: '#000',
  },
});

export default styles;
