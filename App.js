import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZfREHJWnskH6lYgAqbhgYqVCzbSY7Erw",
  authDomain: "osborntracker-e0f7f.firebaseapp.com",
  projectId: "osborntracker-e0f7f",
  storageBucket: "osborntracker-e0f7f.firebasestorage.app",
  messagingSenderId: "445155207639",
  appId: "1:445155207639:web:1d5dd9033293da4588c392",
  measurementId: "G-JHJ2NSV3TP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function App() {
  const [location, setLocation] = useState(null);
  const [status, setStatus] = useState('Menunggu Izin Lokasi...');
  const DEVICE_ID = "HP_OSBORN_01"; 

  useEffect(() => {
    let subscription = null; 

    (async () => {
      let { status: permissionStatus } = await Location.requestForegroundPermissionsAsync();
      if (permissionStatus !== 'granted') {
        setStatus('Izin lokasi ditolak!');
        return;
      }

      setStatus('Melacak Lokasi...');

      subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000, 
          distanceInterval: 10, 
        },
        (loc) => {
          setLocation(loc);
          setStatus('GPS Terkunci! Mengirim data...');
          
          setDoc(doc(db, "trackers", DEVICE_ID), {
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
            timestamp: new Date().toISOString()
          }).then(() => {
             setStatus('Data Terkirim! \nPemantau bisa melihat lokasi ini.');
          }).catch((error) => {
             setStatus('Gagal kirim data ke server.');
             console.error("Error Firebase:", error);
          });
        }
      );
    })();

    return () => {
        if (subscription) {
            subscription.remove();
        }
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OSBORN TRACKER</Text>
      <Text style={styles.statusText}>{status}</Text>
      {location ? (
        <View style={styles.locationBox}>
          <Text style={styles.coordText}>Lat: {location.coords.latitude.toFixed(5)}</Text>
          <Text style={styles.coordText}>Lon: {location.coords.longitude.toFixed(5)}</Text>
        </View>
      ) : (
          <Text>Sedang mencari sinyal satelit...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0f7fa', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#006064' },
  statusText: { fontSize: 16, marginBottom: 20, color: '#004d40', textAlign: 'center' },
  locationBox: { backgroundColor: 'white', padding: 15, borderRadius: 10, elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84 },
  coordText: { fontSize: 18, fontFamily: 'monospace', color: '#333' }
});