# Guided Project: Flight Booking Service (if you have no idea)

You will build a backend service that handles flight bookings — step by step across each topic.

## REST API in Go
Build these 3 endpoints in Go:

**`POST /api/v1/bookings`** — Create a pending booking (locks seats 15 min in Redis, publishes `booking.created`)

<details>
<summary>📥 Request / 📤 Response / ❌ Errors</summary>

**Request Body**
```json
{
  "flightId":   "fl_8a2b3c4d-5e6f-7a8b-9c0d",
  "cabin":      "economy",
  "fareClass":  "M",
  "seats":      ["14A"],
  "passengers": [{
    "firstName":     "Somchai",
    "lastName":      "Jaidee",
    "dateOfBirth":   "1990-05-15",
    "nationality":   "THA",
    "passportNumber":"AA1234567",
    "passportExpiry":"2030-12-31"
  }],
  "contactEmail": "somchai@example.com",
  "contactPhone": "+66812345678"
}
```

**201 Created**
```json
{
  "data": {
    "bookingId":      "bk_7f8a9b0c-1d2e-3f4a-5b6c",
    "pnr":            "QL3XF7",
    "status":         "PENDING",
    "flightId":       "fl_8a2b3c4d-5e6f-7a8b-9c0d",
    "flightNumber":   "QL101",
    "origin":         "BKK",
    "destination":    "NRT",
    "departureAt":    "2026-06-01T08:30:00+07:00",
    "cabin":          "economy",
    "fareClass":      "M",
    "seats":          ["14A"],
    "totalAmount":    12500.00,
    "currency":       "THB",
    "paymentDeadline":"2026-04-07T10:15:00Z",
    "createdAt":      "2026-04-07T10:00:00Z"
  }
}
```

**Errors**
| Code | Reason |
|------|--------|
| 409  | Seat already locked by another session |
| 404  | `flightId` not found |
| 422  | Seats count ≠ passengers count |
| 400  | Validation error on required fields |

</details>

---

**`GET /api/v1/bookings/:bookingId`** — Fetch booking by internal UUID (used by Payment Service to validate amount)

<details>
<summary>📥 Request / 📤 Response / ❌ Errors</summary>

**Request**
```
GET /api/v1/bookings/bk_7f8a9b0c-1d2e-3f4a-5b6c
Authorization: Bearer <internal-service-jwt>
```

**200 OK**
```json
{
  "data": {
    "bookingId":      "bk_7f8a9b0c-1d2e-3f4a-5b6c",
    "pnr":            "QL3XF7",
    "status":         "PENDING",
    "totalAmount":    12500.00,
    "currency":       "THB",
    "passengerId":    "ps_abc123",
    "flightId":       "fl_8a2b3c4d",
    "seats":          ["14A"],
    "paymentDeadline":"2026-04-07T10:15:00Z"
  }
}
```

**Errors**
| Code | Reason |
|------|--------|
| 404  | `bookingId` not found |

</details>

---

**`GET /api/v1/bookings/pnr/:pnr`** — Fetch booking by 6-char PNR (used by check-in, airport staff, customer portal)

<details>
<summary>📥 Request / 📤 Response</summary>

**Request**
```
GET /api/v1/bookings/pnr/QL3XF7
```

**200 OK** — same shape as `GET /:bookingId`
```json
{
  "data": { "pnr": "QL3XF7", "status": "CONFIRMED", "..." : "..." }
}
```

</details>

